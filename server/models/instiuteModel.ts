import mongoose from "mongoose";

const insituteSchema = new mongoose.Schema({
  instituteName: {
    type: String,
    required: true,
    unique: true,
  },
  instituteLogo:{
    type: String,
    unique: true,
  },
  instituteType: {
    enum: ["school", "college", "university", "institute", ],
    type: String,
    required: true,
  },
  instituteCode: {
    type: String,
    required: true,
    unique: true,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

},{timestamps: true});

const Institute = mongoose.model("Institute", insituteSchema);

export default Institute;
