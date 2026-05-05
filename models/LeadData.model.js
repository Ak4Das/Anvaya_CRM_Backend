import mongoose from "mongoose"

const leadSchema = new mongoose.Schema({
  leadCode: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: [true, "name is required and must be a string."],
  },
  status: {
    type: String,
    enum: ["New", "Contacted", "Qualified", "Proposal Sent", "Closed", "Lost"],
    required: [
      true,
      "status must be one of New, Contacted, Qualified, Proposal Sent, Closed, Lost.",
    ],
  },
  salesAgent: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "salesAgent must be a valid ObjectId."],
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
    required: [
      true,
      "source is required and must be one of the predefined values (`Website`, `YouTube`, `Instagram`, `Facebook`, `News paper`, `Our Customers`, `Referral`, `Television Ad`,`Google`,`Other`).",
    ],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required."],
  },
  tags: {
    type: String,
    enum: [`High Value`, `Follow Up`],
    required: [true, "Tag is required."],
  },
  timeToClose: {
    type: Number,
    require: [true, "timeToClose must be a positive integer btw 0 to 30."],
    default: null,
  },
  priority: {
    type: String,
    required: [true, "priority must be one of High, Medium, Low."],
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
