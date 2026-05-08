import mongoose from "mongoose"

const salesAgentSchema = new mongoose.Schema(
  {
    agentCode: {
      type: String,
      required: [true, "agentCode must exist!"],
      unique: [true, "agentCode must be unique!"],
      match: [/^AG-\d+$/, 'agentCode must be in format like "AG-6426045967"'],
    },
    name: {
      type: String,
      required: [true, "name is required."],
      match: [
        /^[A-Za-z]+(?: [A-Za-z]+)+$/,
        "Enter name in format like 'John Doe'",
      ],
    },
    dateOfBirth: {
      type: String,
      required: [true, "DOB is required."],
      match: [/^\d{4}-\d{2}-\d{2}$/, "DOB must be in format yyyy-mm-dd"],
    },
    country: {
      type: String,
      required: [true, "Country is required."],
      match: [/^[A-Z]/, "First letter must be capital"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required."],
      match: [
        /^\(\+\d{1,3}\)\d+$/,
        "Phone number must be in format like (+91)9865327541",
      ],
    },
    phoneNumberNormalized: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "email is required."],
      unique: [true, "email must be unique."],
      lowercase: [true, "every character in email must be in lower case."],
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "email must have '@' and '.' characters",
      ],
    },
    address: {
      type: String,
      required: [true, "address is required field"],
    },
    profileImg: {
      type: String,
      required: [true, "Profile image is required field"],
    },
    role: {
      type: String,
      required: [true, "role is required."],
      default: "Sales Agent",
    },
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "manager is required."],
    },
    location: {
      type: String,
      required: [true, "location is required."],
      default: "Office",
    },
    department: {
      type: String,
      required: [true, "department is required."],
      default: "Sales",
    },
    joinedDate: {
      type: String,
      required: [true, "mention join date."],
      match: [/^\d{4}-\d{2}-\d{2}$/, "joinedDate must be in format yyyy-mm-dd"],
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      required: [true, "status is required"],
      default: "Inactive",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      unique: [true, "Password must be unique"],
      minlength: [6, "Password must contain at least 6 characters"],
    },
  },
  { timestamps: true },
)

const SalesAgent = mongoose.model("SalesAgent", salesAgentSchema)

export default SalesAgent
