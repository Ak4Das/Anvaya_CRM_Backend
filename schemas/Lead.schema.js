import * as yup from "yup"

export const leadSchema = yup.object({
  leadCode: yup
    .string()
    .strict()
    .typeError("leadCode must be a string")
    .required("leadCode must exist")
    .matches(/^LD-\d+$/, 'leadCode must be in format like "LD-41681509"'),
  name: yup
    .string()
    .strict()
    .typeError("name must be a string")
    .required("Name is required")
    .matches(
      /^[A-Z].*$/,
      "First letter must be capital",
    ),
  status: yup
    .string()
    .strict()
    .typeError("status must be a string")
    .oneOf(
      [`New`, `Contacted`, `Qualified`, `Proposal Sent`, `Closed`, `Lost`],
      "status must be one of New, Contacted, Qualified, Proposal Sent, Closed, Lost.",
    )
    .required(
      "status must be one of New, Contacted, Qualified, Proposal Sent, Closed, Lost.",
    ),
  salesAgent: yup
    .string()
    .strict()
    .typeError("salesAgent must be a string")
    .required("Please assign a Sales agent")
    .matches(/^[0-9a-fA-F]{24}$/, "salesAgent must be a valid ObjectId."),
  source: yup
    .string()
    .strict()
    .typeError("source must be a string")
    .oneOf(
      [
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
      "source is required and must be one of the predefined values (`Website`, `Youtube`, `Instagram`, `Facebook`, `News paper`, `Our Customers`, `Referral`, `Television Ad`,`Google`,`Other`).",
    )
    .required(
      "source is required and must be one of the predefined values (`Website`, `Youtube`, `Instagram`, `Facebook`, `News paper`, `Our Customers`, `Referral`, `Television Ad`,`Google`,`Other`).",
    ),
  phoneNumber: yup
    .string()
    .strict()
    .typeError("phoneNumber must be a string")
    .required("Phone number is required")
    .matches(
      /^\(\+\d{1,3}\)\d+$/,
      "Phone number must be in format (+91)9785578985",
    ),
  tags: yup
    .string()
    .strict()
    .typeError("tags must be a string")
    .oneOf(
      [`High Value`, `Follow Up`],
      "Tag must be one of `High Value` or `Follow Up`.",
    )
    .required("Tag must be one of `High Value` or `Follow Up`."),
  timeToClose: yup.number().min(1).max(30).required("Mention time to close"),
  priority: yup
    .string()
    .strict()
    .typeError("priority must be a string")
    .oneOf(
      [`High`, `Medium`, `Low`],
      "priority must be one of High, Medium, Low.",
    )
    .required("priority must be one of High, Medium, Low."),
  closedAt: yup
    .string()
    .strict()
    .typeError("closedAt must be a string")
    .test(
      "valid-date-format",
      "closedAt must be in format yyyy-mm-dd",
      (value) => {
        if (!value) return true

        return /^\d{4}-\d{2}-\d{2}$/.test(value)
      },
    )
    .default(""),
  lostAt: yup
    .string()
    .strict()
    .typeError("lostAt must be a string")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "lostAt must be in format yyyy-mm-dd"),
  createdAt: yup
    .string()
    .strict()
    .typeError("createdAt must be a string")
    .required()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "createdAt must be in format yyyy-mm-dd"),
  updatedAt: yup
    .string()
    .strict()
    .typeError("updatedAt must be a string")
    .test(
      "valid-date-format",
      "updatedAt must be in format yyyy-mm-dd",
      (value) => {
        if (!value) return true

        return /^\d{4}-\d{2}-\d{2}$/.test(value)
      },
    )
    .default(""),
})
