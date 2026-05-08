import * as yup from "yup"

export const agentCommentSchema = yup.object({
  lead: yup
    .string()
    .strict()
    .typeError("lead id must be a string")
    .required("lead id is required.")
    .matches(/^[0-9a-fA-F]{24}$/, "lead must be a valid ObjectId."),
  author: yup
    .string()
    .strict()
    .typeError("author must be a string")
    .required("author is required.")
    .matches(/^[0-9a-fA-F]{24}$/, "author must be a valid ObjectId."),
  commentText: yup
    .string()
    .strict()
    .typeError("commentText must be a string")
    .required("comment body is required."),
})
