import {
  fetchLeadsByPropertyInATimeRange,
  createANewLead,
} from "../controllers/Lead.controller.js"

import express from "express"
const router = express.Router()

router.get("/", fetchLeadsByPropertyInATimeRange)

router.post("/addLead", createANewLead)

export default router
