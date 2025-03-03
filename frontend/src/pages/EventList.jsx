import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CustomModal from "../components/CustomModal"; // Import the modal

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/api/events/")
      .then(response => setEvents(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDeleteClick = (id) => {
    setEventToDelete(id);
    setModalOpen(true);
  };

  const deleteEvent = async () => {
    if (eventToDelete) {
      try {
        await axios.delete(`http://localhost:3000/api/events/delete/${eventToDelete}`);
        setEvents(events.filter(event => event._id !== eventToDelete));
        setModalOpen(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="event-container">
      {/* Top Center Add Event Button */}
      <div className="add-event-top">
        <Link to="/create" className="btn btn-primary">
          <i className="fas fa-plus"></i> Add Event
        </Link>
      </div>

      {/* Floating Bottom Right Add Event Button */}
      <Link to="/create" className="btn-floating">
        <i className="fas fa-plus"></i>
      </Link>

      <div className="event-list">
        {events.map(event => (
          <div key={event._id} className="event-card">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p className="event-meta">
              📅 {new Date(event.date).toDateString()} | 📍 {event.location}
            </p>
            <p className="event-meta">🧑‍💼 Organizer: {event.organizer}</p>

            <div className="event-buttons">
              <Link to={`/update/${event._id}`} className="btn btn-secondary">
                <i className="fas fa-edit"></i> Edit
              </Link>
              <button onClick={() => handleDeleteClick(event._id)} className="btn btn-delete">
                <i className="fas fa-trash"></i> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Delete Confirmation Modal */}
      <CustomModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={deleteEvent}
      />
    </div>
  );
};

export default EventList;
