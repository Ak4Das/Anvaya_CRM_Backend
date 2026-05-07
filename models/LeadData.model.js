import mongoose from "mongoose"

const leadSchema = new mongoose.Schema({
  leadCode: {
    type: String,
    unique: [true, "leadCode must be unique"],
    required: [true, "leadCode must exist"],
    match: [/^LD-\d+$/, 'leadCode must be in format like "LD-41681509"'],
  },
  name: {
    type: String,
    required: [true, "name is required."],
    match: [
      /^[A-Za-z]+(?: [A-Za-z]+)+$/,
      "Enter name in format like 'John Doe'",
    ],
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
    match: [
      /^\(\+\d{1,3}\)\d+$/,
      "Phone number must be in format like (+91)9865327541",
    ],
  },
  tags: {
    type: String,
    enum: [`High Value`, `Follow Up`],
    required: [true, "Tag is required."],
  },
  timeToClose: {
    type: Number,
    required: [true, "timeToClose is required."],
    min: [0, "timeToClose must be at least 0."],
    max: [30, "timeToClose must be at most 30."],
  },
  priority: {
    type: String,
    enum: [`High`, `Medium`, `Low`],
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
