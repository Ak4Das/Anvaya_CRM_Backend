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
      /^[A-Z][a-z]*$/,
      "Enter name in format like 'John'",
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
      "source is required and must be one of the predefined values (`Website`, `Youtube`, `Instagram`, `Facebook`, `News paper`, `Our Customers`, `Referral`, `Television Ad`,`Google`,`Other`).",
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
    validate: {
      validator: function (value) {
        if (!value) return true

        return /^\d{4}-\d{2}-\d{2}$/.test(value)
      },

      message: "closedAt must be in format yyyy-mm-dd",
    },
    default: "",
  },
  lostAt: {
    type: String,
    match: [/^\d{4}-\d{2}-\d{2}$/, "lostAt must be in format yyyy-mm-dd"],
  },
  createdAt: {
    type: String,
    required: true,
    match: [/^\d{4}-\d{2}-\d{2}$/, "createdAt must be in format yyyy-mm-dd"],
  },
  updatedAt: {
    type: String,
    validate: {
      validator: function (value) {
        if (!value) return true

        return /^\d{4}-\d{2}-\d{2}$/.test(value)
      },

      message: "updatedAt must be in format yyyy-mm-dd",
    },
    default: "",
  },
})

const Lead = mongoose.model("Lead", leadSchema)

export default Lead
