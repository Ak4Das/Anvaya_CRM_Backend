import EventModel from "../models/Event.model.js"

export const getAllEvents = async (req, res) => {
  try {
    const Events = await EventModel.find()
    res.status(200)
    res.json(Events)
  } catch (error) {
    throw error
  }
}

export const postNewEvent = async (req, res) => {
  try {
    const newEvent = new EventModel(req.body)
    await newEvent.save()
    res.status(200)
    res.json(newEvent)
  } catch (error) {
    if (error.name === "ValidationError") {
      throw new ValidationError(error.message)
    } else if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0]
      throw new ValidationError(`${field} must be unique`)
    } else {
      throw error
    }
  }
}
