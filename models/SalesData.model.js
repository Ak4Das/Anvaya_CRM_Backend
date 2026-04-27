import mongoose from "mongoose"

const salesDataSchema = new mongoose.Schema({
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
    enum: ["Closed"],
    required: true,
  },
  salesAgent: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  closedAt: {
    type: String,
    default: "",
  },
  createdAt: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: String,
    required: true,
  },
  purchaseAmount: {
    type: Number,
    required: true,
  },
})

const SalesData = mongoose.model("SalesData", salesDataSchema)

export default SalesData
