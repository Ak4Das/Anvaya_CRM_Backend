import {
  getSalesDataByPropertyInATimeRange,
  getAllSalesData,
} from "../services/SalesData.service.js"

export const fetchSalesDataByPropertyInATimeRange = async (req, res) => {
  try {
    const { minDay, maxDay, filters: Filters } = req.query
    const filters = Filters && JSON.parse(decodeURIComponent(req.query.filters))
    const SalesData = await getSalesDataByPropertyInATimeRange(
      minDay,
      maxDay,
      filters,
    )
    res.status(200)
    res.json(SalesData)
  } catch (error) {
    throw error
  }
}

export const fetchAllSalesData = async (req, res) => {
  try {
    const SalesData = await getAllSalesData()
    res.status(200)
    res.json(SalesData)
  } catch (error) {
    throw error
  }
}
