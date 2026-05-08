import { ValidationError } from "../utils/customErrorHandler.js"

export const SchemaValidation = (schema) => async (req, res, next) => {
  try {
    const body = req.body
    await schema.validate(body)
    next()
  } catch (error) {
    const newError = new ValidationError(error.message, error.errors)
    next(newError)
  }
}
