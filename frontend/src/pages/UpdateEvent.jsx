import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    organizer: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/api/events/${id}`)
      .then(response => setEvent(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/events/update/${id}`, event);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h1>Update Event</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={event.title} onChange={handleChange} required />
        <textarea name="description" value={event.description} onChange={handleChange} required />
        <input type="datetime-local" name="date" value={event.date} onChange={handleChange} required />
        <input type="text" name="location" value={event.location} onChange={handleChange} required />
        <input type="text" name="organizer" value={event.organizer} onChange={handleChange} required />

        <div className="button-group">
          <button type="submit" className="btn btn-primary">
            <i className="fas fa-save"></i> Save Changes
          </button>
          <button type="button" onClick={() => navigate("/")} className="btn btn-secondary">
            <i className="fas fa-times"></i> Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEvent;
