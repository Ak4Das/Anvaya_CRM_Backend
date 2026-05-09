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

export const FiltersValidation = (schema) => async (req, res, next) => {
  try {
    const Filters = req.query.filters
    if (Filters) {
      const filters = Filters && JSON.parse(decodeURIComponent(Filters))
      if (typeof filters !== "object") {
        throw new ValidationError("filters must be an object")
      }
      await schema.validate(filters)
    }

    next()
  } catch (error) {
    const newError = new ValidationError(error.message, error.errors)
    next(newError)
  }
}
