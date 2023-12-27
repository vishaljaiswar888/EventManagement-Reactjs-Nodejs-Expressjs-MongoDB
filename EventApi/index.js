import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Event } from "./eventModel.js";
const app = express();
app.use(cors());
app.use(express.json());
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Mangement");
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

app.post("/event", async (req, res) => {
  try {
    const reqdata = req.body;
    const event = new Event(reqdata);
    await event.save();
    res.send({ message: "Inserted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/event", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/event/:artistName", async (req, res) => {
  try {
    const artistName = req.params.artistName;
    const deletedEvent = await Event.deleteOne({ artistName });

    if (deletedEvent.deletedCount > 0) {
      res.json({ message: "Event deleted successfully" });
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting event: " + error });
  }
});



// Import necessary modules and models

app.put("/event/:eventId", async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const updatedEventData = req.body; // Assuming your request body contains the updated data

    // Perform validation if necessary

    const updatedEvent = await Event.findOneAndUpdate(
      { _id: eventId },
      { $set: updatedEventData },
      { new: true }
    );

    if (updatedEvent) {
      res.json({ message: "Event updated successfully", updatedEvent });
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating event: " + error });
  }
});




 app.delete("/event", async (req, res) => {
 try {
   await Event.deleteMany(); // Delete all documents in the "Event" collection
   res.json({ message: "All events deleted successfully" });
 } catch (error) {
   res.status(500).json({ error: "Internal Server Error" });
 }
 });

app.listen(5001, () => {
  console.log("server started");
  connectDb();
});
