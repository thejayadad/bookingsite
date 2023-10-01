import mongoose from "mongoose";

const HostSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    rides: {
      type: [String],
    },
    cheapestPrice: {
      type: Number,
      required: true,
    },
  });

export default mongoose.models.Host || mongoose.model("Host", HostSchema);  