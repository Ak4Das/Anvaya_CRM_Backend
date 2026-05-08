import {
  fetchLeadsByPropertyInATimeRange,
  createANewLead,
  updateLead,
} from "../controllers/Lead.controller.js"
import { SchemaValidation } from "../middlewares/SchemaValidation.middleware.js"
import { leadSchema } from "../schemas/Lead.schema.js"

import express from "express"
const router = express.Router()

router.get("/", fetchLeadsByPropertyInATimeRange)

router.post("/addLead", SchemaValidation(leadSchema), createANewLead)

router.patch("/update/:id", updateLead)

export default router
