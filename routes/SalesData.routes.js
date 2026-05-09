import {
  fetchSalesDataByPropertyInATimeRange,
  fetchAllSalesData,
} from "../controllers/SalesData.controller.js"
import { FiltersValidation } from "../middlewares/SchemaValidation.middleware.js"
import { salesDataFiltersSchema } from "../schemas/SalesDataFilters.schema.js"

import express from "express"
const router = express.Router()

router.get("/", fetchAllSalesData)

router.get(
  "/prop",
  FiltersValidation(salesDataFiltersSchema),
  fetchSalesDataByPropertyInATimeRange,
)

export default router
