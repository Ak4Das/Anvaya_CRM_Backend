import * as yup from "yup"

export const salesDataFiltersSchema = yup.object({
  leadCode: yup
    .string()
    .strict()
    .typeError("lead id must be a string")
    .notRequired(),
  name: yup
    .string()
    .strict()
    .typeError("name must be a string")
    .matches(/^[A-Z][a-z]+(?:\s[A-Z][a-z]+)+$/, {
      message: "Enter name in format like 'John Doe'",
      excludeEmptyString: true,
    })
    .notRequired(),
  status: yup
    .string()
    .strict()
    .typeError("status must be a string")
    .oneOf(["Closed"], "status must be Closed.")
    .notRequired(),
  salesAgent: yup
    .string()
    .strict()
    .typeError("salesAgent must be a string")
    .matches(/^[0-9a-fA-F]{24}$/, {
      message: "salesAgent must be a valid ObjectId.",
      excludeEmptyString: true,
    })
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
    .notRequired(),
  createdAt: yup
    .string()
    .strict()
    .typeError("createdAt must be a string")
    .matches(/^\d{4}-\d{2}-\d{2}$/, {
      message: "createdAt must be in format yyyy-mm-dd",
      excludeEmptyString: true,
    })
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
    .notRequired(),
  purchaseAmount: yup.number().notRequired(),
})
