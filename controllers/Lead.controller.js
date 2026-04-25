import {
  getAllLeadsCreatedInATimeRange,
  getLeadByStatus,
} from "../services/Lead.service.js"

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

export const fetchLeadByStatus = async (req, res) => {
  try {
    const { status } = req.params
    const leads = await getLeadByStatus(status)
    res.status(200)
    res.json(leads)
  } catch (error) {
    throw error
  }
}
