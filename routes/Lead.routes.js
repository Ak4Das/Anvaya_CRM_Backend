import {
  fetchLeadsByPropertyInATimeRange,
} from "../controllers/Lead.controller.js"

import express from "express"
const router = express.Router()

router.get("/", fetchLeadsByPropertyInATimeRange)

export default router
