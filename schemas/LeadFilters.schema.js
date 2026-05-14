import * as yup from "yup"

export const leadFilterSchema = yup.object({
  leadCode: yup
    .string()
    .strict()
    .typeError("leadCode must be a string")
    .matches(/^LD-\d+$/, 'leadCode must be in format like "LD-41681509"')
    .notRequired(),
  name: yup
    .string()
    .strict()
    .typeError("name must be a string")
    .matches(
      /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)+$/,
      "Enter name in format like 'John Doe'",
    )
    .notRequired(),
  status: yup
    .string()
    .strict()
    .typeError("status must be a string")
    .oneOf(
      [`New`, `Contacted`, `Qualified`, `Proposal Sent`, `Closed`, `Lost`],
      "status must be one of New, Contacted, Qualified, Proposal Sent, Closed, Lost.",
    )
    .notRequired(),
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
    .notRequired(),
  phoneNumber: yup
    .string()
    .strict()
    .typeError("phoneNumber must be a string")
    .matches(
      /^\(\+\d{1,3}\)\d+$/,
      "Phone number must be in format (+91)9785578985",
    )
    .notRequired(),
  tags: yup
    .string()
    .strict()
    .typeError("tags must be a string")
    .oneOf(
      [`High Value`, `Follow Up`],
      "Tag must be one of `High Value` or `Follow Up`.",
    )
    .notRequired(),
  timeToClose: yup.number().min(1).max(30).notRequired(),
  priority: yup
    .string()
    .strict()
    .typeError("priority must be a string")
    .oneOf(
      [`High`, `Medium`, `Low`],
      "priority must be one of High, Medium, Low.",
    )
    .notRequired(),
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
    .default("")
    .notRequired(),
  lostAt: yup
    .string()
    .strict()
    .typeError("lostAt must be a string")
    .matches(/^$|^\d{4}-\d{2}-\d{2}$/, "lostAt must be in format yyyy-mm-dd")
    .notRequired(),
  createdAt: yup
    .string()
    .strict()
    .typeError("createdAt must be a string")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "createdAt must be in format yyyy-mm-dd")
    .notRequired(),
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
    .default("")
    .notRequired(),
})
