import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    institute: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Institute",
    },
    instituteCode: {
      required: true,
      type: String,
    },
    role: {
      enum: ["admin", "teacher", "student"],
      type: String,
      required: true,
    },
    employeeId: {
      type: String,
      required: function (): boolean {
        return this.role === "teacher";
      },
      unique: true,
    },
    studentId: {
      type: String,
      required: function (): boolean {
        return this.role === "student";
      },
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {timestamps: true},
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
export default User;
