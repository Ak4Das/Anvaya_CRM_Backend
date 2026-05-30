import SalesDataModel from "../models/SalesData.model.js"
import {
  BadRequestError,
  ValidationError,
} from "../utils/customErrorHandler.js"

function getStartAndEndDate(minDay, maxDay) {
  const today = new Date() // 2026-05-28

  const firstPastDate = new Date()
  firstPastDate.setDate(today.getDate() - minDay)

  const secondPastDate = new Date()
  secondPastDate.setDate(today.getDate() - maxDay)

  const formatDate = (date) => date.toISOString().split("T")[0]

  const startDate = formatDate(secondPastDate)
  const endDate = formatDate(firstPastDate)

  return { startDate, endDate }
}

export const getSalesDataByPropertyInATimeRange = async (req, res) => {
  try {
    if (!req.query.minDay || !req.query.maxDay) {
      throw new ValidationError("minDay and maxDay query are required.")
    }

    const { minDay, maxDay, filters: Filters } = req.query

    let filters = Filters && JSON.parse(decodeURIComponent(Filters))

    const { startDate, endDate } = getStartAndEndDate(minDay, maxDay)

    const filter = {
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    }

    filters &&
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          filter[key] = value
        }
      })

    const salesData = await SalesDataModel.find(filter)

    res.status(200)
    res.json({
      success: true,
      message: "Sales data fetched successfully",
      respondedData: salesData,
    })
  } catch (error) {
    throw error
  }
}

export const getAllSalesData = async (req, res) => {
  try {
    const salesData = await SalesDataModel.find()
    res.status(200)
    res.json({
      success: true,
      message: "Sales data fetched successfully",
      respondedData: salesData,
    })
  } catch (error) {
    throw error
  }
}
