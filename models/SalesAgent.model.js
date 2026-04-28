import mongoose from "mongoose"

const salesAgentSchema = new mongoose.Schema(
  {
    agentCode: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    phoneNumberNormalized: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    profileImg: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "Sales Agent",
    },
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      default: "69eafb7ba796c8a7b4a87429",
    },
    location: {
      type: String,
      required: true,
      default: "Office",
    },
    department: {
      type: String,
      required: true,
      default: "Sales",
    },
    joinedDate: {
      type: String,
      required: true,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      required: true,
      default: "Inactive",
    },
  },
  { timestamps: true },
)

const SalesAgent = mongoose.model("SalesAgent", salesAgentSchema)

export default SalesAgent
