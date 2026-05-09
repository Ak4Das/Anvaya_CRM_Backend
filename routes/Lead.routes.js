import {
  fetchLeadsByPropertyInATimeRange,
  createANewLead,
  updateLead,
} from "../controllers/Lead.controller.js"
import {
  FiltersValidation,
  SchemaValidation,
} from "../middlewares/SchemaValidation.middleware.js"
import { leadSchema } from "../schemas/Lead.schema.js"
import { leadFilterSchema } from "../schemas/LeadFilters.schema.js"

import express from "express"
const router = express.Router()

router.get(
  "/",
  FiltersValidation(leadFilterSchema),
  fetchLeadsByPropertyInATimeRange,
)

router.post("/addLead", SchemaValidation(leadSchema), createANewLead)

router.patch("/update/:id", updateLead)

export default router
