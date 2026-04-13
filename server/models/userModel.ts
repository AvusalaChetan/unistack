import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Institute from "./instiuteModel";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  instituteCode: {
    required: true,
    type: String,
    unique: true,
  },
  role: {
    enum: ["admin", "teacher", "student"],
    type: String,
    required: true,
  },
  employeeId: {
    type: String,
    required: function ():boolean {
      return this.role === "teacher";
    },
    unique: true,
  },
  studentId: {
    type: String,
    required: function ():boolean {
      return this.role === "student";
    },
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
},{timestamps: true});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export const User = mongoose.model("User", userSchema);
