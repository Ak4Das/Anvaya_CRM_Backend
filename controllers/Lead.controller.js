import { getAllLeadsCreatedInATimeRange } from "../services/Lead.service.js"

export const fetchAllLeadsCreatedInATimeRange = async (req, res) => {
  try {
    const { minDay, maxDay } = req.query
    const leads = await getAllLeadsCreatedInATimeRange(minDay, maxDay)
    res.status(200)
    res.json(leads)
  } catch (error) {
    throw error
  }
}
