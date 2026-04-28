import mongoose from "mongoose"

const leadSchema = new mongoose.Schema({
  leadCode: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["New", "Contacted", "Qualified", "Proposal Sent", "Closed", "Lost"],
    required: true,
  },
  salesAgent: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  source: {
    type: String,
    enum: [
      `Website`,
      `Youtube`,
      `Instagram`,
      `Facebook`,
      `News Paper`,
      `Our Customers`,
      `Referral`,
      `Television Ad`,
      `Google`,
      `Other`,
    ],
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    enum: [`High Value`, `Follow Up`],
    required: true,
  },
  timeToClose: {
    type: Number,
    default: null,
  },
  priority: {
    type: String,
    required: true,
  },
  closedAt: {
    type: String,
    default: "",
  },
  lostAt: {
    type: String,
  },
  createdAt: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: String,
    default: "",
  },
})

const Lead = mongoose.model("Lead", leadSchema)

export default Lead
