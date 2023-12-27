
import mongoose,{ Schema } from "mongoose";


const eventSchema = new mongoose.Schema({
  
  eventName: {
    type: String,
    required: true,
  },
  artistName: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
  },
  eventLocation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const Event = mongoose.model('Event', eventSchema);


