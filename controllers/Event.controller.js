import { getAllEvents, postNewEvent } from "../services/Event.service.js"
import { asyncHandler } from "../utils/asyncHandler.js"

export const fetchAllEvents = asyncHandler(getAllEvents)

export const createNewEvent = asyncHandler(postNewEvent)
