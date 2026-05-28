import {
  fetchAllEvents,
  createNewEvent,
} from "../controllers/Event.controller.js"
import { SchemaValidation } from "../middlewares/SchemaValidation.middleware.js"
import { eventSchema } from "../schemas/Event.schema.js"

import express from "express"
const router = express.Router()

router.get("/", fetchAllEvents)

router.post("/addEvent", SchemaValidation(eventSchema), createNewEvent)

export default router
