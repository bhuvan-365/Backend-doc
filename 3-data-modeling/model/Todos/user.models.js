import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    // username : String,
    // email : String
    // OR Call mongoose object
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      // required: [true, "Must be required"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
