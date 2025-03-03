import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CustomModal from "../components/CustomModal";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [filter, setFilter] = useState("all"); // Filter state: all, past, future

  useEffect(() => {
    axios.get("http://localhost:3000/api/events/")
      .then(response => {
        const sortedEvents = response.data.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        setEvents(sortedEvents);
        setFilteredEvents(sortedEvents);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize to start of the day

    let filtered = [...events];

    if (filter === "past") {
      filtered = events.filter(event => new Date(event.date) < today);
    } else if (filter === "future") {
      filtered = events.filter(event => new Date(event.date) >= today);
    }

    setFilteredEvents(filtered);
  }, [filter, events]);

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

  // Function to check if an event is happening today
  const isToday = (date) => {
    const eventDate = new Date(date);
    const today = new Date();
    return (
      eventDate.getDate() === today.getDate() &&
      eventDate.getMonth() === today.getMonth() &&
      eventDate.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="event-container">
      {/* Top Center Add Event Button */}
      <div className="add-event-top">
        <Link to="/create" className="btn btn-primary">
          <i className="fas fa-plus"></i> Add Event
        </Link>
      </div>

      {/* Filter Options */}
      <div className="filter-container">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
          All Events
        </button>
        <button className={filter === "past" ? "active" : ""} onClick={() => setFilter("past")}>
          Past Events
        </button>
        <button className={filter === "future" ? "active" : ""} onClick={() => setFilter("future")}>
          Future Events
        </button>
      </div>

      {/* Floating Bottom Right Add Event Button */}
      <Link to="/create" className="btn-floating">
        <i className="fas fa-plus"></i>
      </Link>

      {/* Event List */}
      <div className="event-list">
        {filteredEvents.length === 0 ? (
          <div className="no-events-card">
            <p>Oops, seems there are no events scheduled</p>
          </div>
        ) : (
          filteredEvents.map(event => (
            <div
              key={event._id}
              className={`event-card ${isToday(event.date) ? "event-today" : ""}`}
            >
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
          ))
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <CustomModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onConfirm={deleteEvent} />
    </div>
  );
};

export default EventList;
