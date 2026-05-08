import * as yup from "yup"

export const agentSchema = yup.object({
  agentCode: yup
    .string()
    .strict()
    .typeError("agentCode must be a string")
    .required("agentCode must exist!")
    .matches(/^AG-\d+$/, 'agentCode must be in format like "AG-6426045967"'),
  name: yup
    .string()
    .strict()
    .typeError("name must be a string")
    .required("Name is required.")
    .matches(
      /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)+$/,
      "Enter name in format like 'John Doe'",
    ),
  dateOfBirth: yup
    .string()
    .strict()
    .typeError("DOB must be a string")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "DOB must be in yyyy-mm-dd format")
    .required("Date is required"),
  country: yup
    .string()
    .strict()
    .typeError("country must be a string")
    .matches(/^[A-Z]/, "First letter must be capital")
    .required("Country is required"),
  phoneNumber: yup
    .string()
    .strict()
    .typeError("phoneNumber must be a string")
    .required("Phone number is required")
    .matches(
      /^\(\+\d{1,3}\)\d+$/,
      "Phone number must be in format (+91)9785578985",
    ),
  phoneNumberNormalized: yup
    .string()
    .strict()
    .typeError("phoneNumberNormalized must be a string")
    .required(),
  email: yup
    .string()
    .strict()
    .typeError("email must be a string")
    .email("Invalid email format")
    .required("email is required.")
    .test(
      "is-lowercase",
      "Email must be in lowercase",
      (value) => value === value?.toLowerCase(),
    ),
  address: yup
    .string()
    .strict()
    .typeError("address must be a string")
    .required("Please enter your address"),
  profileImg: yup
    .string()
    .strict()
    .typeError("profileImg must be a string")
    .required("Profile image is required."),
  role: yup.string().strict().typeError("role must be a string"),
  manager: yup
    .string()
    .strict()
    .typeError("manager must be a string")
    .matches(/^[0-9a-fA-F]{24}$/, "manager must be a valid ObjectId.")
    .required("manager is required."),
  location: yup.string().strict().typeError("location must be a string"),
  department: yup.string().strict().typeError("department must be a string"),
  joinedDate: yup
    .string()
    .strict()
    .typeError("joinedDate must be a string")
    .required("mention join date.")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "joinedDate must be in format yyyy-mm-dd"),
  status: yup
    .string()
    .strict()
    .typeError("status must be a string")
    .oneOf(["Active", "Inactive"], "status must be one of Active or Inactive."),
  password: yup
    .string()
    .strict()
    .typeError("password must be a string")
    .min(6, "Password must contain at least 6 characters")
    .required("Password is required"),
})
