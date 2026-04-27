import mongoose from "mongoose"

const salesAgentSchema = new mongoose.Schema(
  {
    agentCode: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Sales Agent name is required"],
    },
    age: {
      type: Number,
      required: [true, "Sales Agent age is required"],
    },
    dateOfBirth: {
      type: String,
      required: [true, "Sales Agent DOB is required"],
    },
    country: {
      type: String,
      required: [true, "Sales Agent country is required"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Sales Agent phone number is required"],
    },
    phoneNumberNormalized: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Sales Agent email is required"],
      unique: true,
      lowercase: true,
    },
    profileImg: {
      type: String,
      required: [true, "Sales Agent profile image is required"],
    },
    role: {
      type: String,
      default: "Sales Agent",
    },
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    location: {
      type: String,
      default: "Office",
    },
    department: {
      type: String,
      default: "Sales",
    },
    joinedDate: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true },
)

const SalesAgent = mongoose.model("SalesAgent", salesAgentSchema)

export default SalesAgent
