import {
  getLeadsByPropertyInATimeRange,
} from "../services/Lead.service.js"

export const fetchLeadsByPropertyInATimeRange = async (req, res) => {
  try {
    const { minDay, maxDay, property, value } = req.query
    const leads = await getLeadsByPropertyInATimeRange(
      minDay,
      maxDay,
      property,
      value,
    )
    res.status(200)
    res.json(leads)
  } catch (error) {
    throw error
  }
}
