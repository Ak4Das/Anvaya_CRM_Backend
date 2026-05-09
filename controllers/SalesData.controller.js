import {
  getSalesDataByPropertyInATimeRange,
  getAllSalesData,
} from "../services/SalesData.service.js"
import { asyncHandler } from "../utils/asyncHandler.js"

export const fetchSalesDataByPropertyInATimeRange = asyncHandler(
  getSalesDataByPropertyInATimeRange,
)

export const fetchAllSalesData = asyncHandler(getAllSalesData)