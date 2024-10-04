import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: String,
    profilePic: {
      type: Object,
      required: true,
    },
    role: {
      type: String,
      default: "general",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", schema);

export default User;
