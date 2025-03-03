import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    organizer: ""
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/events/create", event);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Event Title" onChange={handleChange} required />
        <textarea name="description" placeholder="Event Description" onChange={handleChange} required />
        <input type="datetime-local" name="date" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
        <input type="text" name="organizer" placeholder="Organizer" onChange={handleChange} required />

        <div className="button-group">
          <button type="submit" className="btn btn-primary">
            <i className="fas fa-plus"></i> Create Event
          </button>
          <button type="button" onClick={() => navigate("/")} className="btn btn-secondary">
            <i className="fas fa-times"></i> Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
