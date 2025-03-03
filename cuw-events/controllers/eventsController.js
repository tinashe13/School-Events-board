import Event from "../models/eventsModel.js";

// Create an event
export const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    if(events.length === 0){
      res.status(200).json({message: "No events has been added yet"})
    }
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get an event by ID
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an event
export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event){
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an event
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event){
      return res.status(404).json({ message: "Event not found" });
    } 
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
