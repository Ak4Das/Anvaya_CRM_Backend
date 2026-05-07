import { ValidationError } from "../utils/customErrorHandler.js"

export const leadValidation = (schema) => async (req, res, next) => {
  const body = req.body
  try {
    await schema.validate(body)
    next()
  } catch (error) {
    const newError = new ValidationError(error.message, error.errors)
    next(newError)
  }
}
