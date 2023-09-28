import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },

      img: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        default: "User"
      },
    },
    { timestamps: true }
  );

export default mongoose.models.User || mongoose.model("User", userSchema);