import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["teacher", "student"],
    },
    employeeId: {
      type: String,
      required: function (): boolean {
        return this.role === "teacher";
      },
      trim: true,
    },
    studentId: {
      type: String,
      required: function (): boolean {
        return this.role === "student";
      },
      trim: true,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "accepted", "rejected"],
    },
    rejectReason: {
      type: String,
      trim: true,
    },
    institute: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Institute",
      required: true,
    },
    expiresAt: {
      type: Date,
      default: () => new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
  },
  {timestamps: true},
);

requestSchema.index({expiresAt: 1}, {expireAfterSeconds: 0});

requestSchema.index(
  {email: 1, institute: 1},
  {
    unique: true,
    partialFilterExpression: {status: "pending"},
  },
);

export const RequestModel = mongoose.model("Request", requestSchema);
