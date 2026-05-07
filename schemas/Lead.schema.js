import * as yup from "yup"

export const leadSchema = yup.object({
  leadCode: yup
    .string()
    .required("leadCode must exist")
    .matches(/^LD-\d+$/, 'leadCode must be in format like "LD-41681509"'),
  name: yup
    .string()
    .required("Name is required")
    .matches(
      /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)+$/,
      "Enter name in format like 'John Doe'",
    ),
  status: yup
    .string()
    .oneOf(
      [`New`, `Contacted`, `Qualified`, `Proposal Sent`, `Closed`, `Lost`],
      "status must be one of New, Contacted, Qualified, Proposal Sent, Closed, Lost.",
    )
    .required(
      "status must be one of New, Contacted, Qualified, Proposal Sent, Closed, Lost.",
    ),
  salesAgent: yup
    .string()
    .required("Please assign a Sales agent")
    .matches(/^[0-9a-fA-F]{24}$/, "salesAgent must be a valid ObjectId."),
  source: yup
    .string()
    .oneOf(
      [
        `Website`,
        `YouTube`,
        `Instagram`,
        `Facebook`,
        `News paper`,
        `Our Customers`,
        `Referral`,
        `Television Ad`,
        `Google`,
        `Other`,
      ],
      "source is required and must be one of the predefined values (`Website`, `YouTube`, `Instagram`, `Facebook`, `News paper`, `Our Customers`, `Referral`, `Television Ad`,`Google`,`Other`).",
    )
    .required(
      "source is required and must be one of the predefined values (`Website`, `YouTube`, `Instagram`, `Facebook`, `News paper`, `Our Customers`, `Referral`, `Television Ad`,`Google`,`Other`).",
    ),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^\(\+\d{1,3}\)\d+$/,
      "Phone number must be in format (+91)9785578985",
    ),
  tags: yup
    .string()
    .oneOf(
      [`High Value`, `Follow Up`],
      "Tag must be one of `High Value` or `Follow Up`.",
    )
    .required("Tag must be one of `High Value` or `Follow Up`."),
  timeToClose: yup.number().min(1).max(30).required("Mention time to close"),
  priority: yup
    .string()
    .oneOf(
      [`High`, `Medium`, `Low`],
      "priority must be one of High, Medium, Low.",
    )
    .required("priority must be one of High, Medium, Low."),
  closedAt: yup.string().default(""),
  lostAt: yup.string(),
  createdAt: yup.string().required(),
  updatedAt: yup.string().default(""),
})
