import {
  fetchAllLeadsCreatedInATimeRange,
  fetchLeadByStatus,
} from "../controllers/Lead.controller.js"

import express from "express"
const router = express.Router()

router.get("/", fetchAllLeadsCreatedInATimeRange)

router.get("/status/:status", fetchLeadByStatus)

export default router

