import { fetchAllLeadsCreatedInATimeRange } from "../controllers/Lead.controller.js"

import express from "express"
const router = express.Router()

router.get("/", fetchAllLeadsCreatedInATimeRange)

export default router
