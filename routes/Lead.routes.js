import {
  fetchLeadsByPropertyInATimeRange,
  createANewLead,
  updateLead,
} from "../controllers/Lead.controller.js"

import express from "express"
const router = express.Router()

router.get("/", fetchLeadsByPropertyInATimeRange)

router.post("/addLead", createANewLead)

router.patch("/update/:id", updateLead)

export default router
