import * as yup from "yup"

export const eventSchema = yup.object({
  title: yup
    .string()
    .required("Event title is required.")
    .trim(),

  start: yup
    .date()
    .required("Start date/time is required."),

  end: yup
    .date()
    .required("End date/time is required.")
    .test(
      "is-end-after-start",
      "End date/time must be after start date/time.",
      function (value) {
        return value > this.parent.start
      }
    ),
})