import mongoose from "mongoose"

const salesDataSchema = new mongoose.Schema({
  leadCode: {
    type: String,
    unique: [true, "Lead code must be unique."],
    required: [true, "Lead code is required."],
  },
  name: {
    type: String,
    required: [true, "name is required."],
  },
  status: {
    type: String,
    enum: ["Closed"],
    required: [true, "status is required."],
  },
  salesAgent: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "sales agent is required."],
  },
  closedAt: {
    type: String,
    default: "",
  },
  createdAt: {
    type: String,
    required: [true, "created date is required."],
  },
  updatedAt: {
    type: String,
  },
  purchaseAmount: {
    type: Number,
    required: [true, "Purchase amount is required."],
  },
})

const SalesData = mongoose.model("SalesData", salesDataSchema)

export default SalesData
