import {
  fetchSalesDataByPropertyInATimeRange,
  fetchAllSalesData,
} from "../controllers/SalesData.controller.js"

import express from "express"
const router = express.Router()

router.get("/", fetchAllSalesData)

router.get("/prop", fetchSalesDataByPropertyInATimeRange)

export default router
