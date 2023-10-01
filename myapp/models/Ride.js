import mongoose from "mongoose";

const RideSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    hostid: {
      type: String,
      required: true
    },
    rideNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],


  },   { timestamps: true }
  );

export default mongoose.models.Ride || mongoose.model("Ride", RideSchema);