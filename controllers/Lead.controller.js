import {
  getLeadsByPropertyInATimeRange,
  postNewLead,
} from "../services/Lead.service.js"

export const fetchLeadsByPropertyInATimeRange = async (req, res) => {
  try {
    const { minDay, maxDay, filters } = req.query
    const leads = await getLeadsByPropertyInATimeRange(minDay, maxDay, filters)
    res.status(200)
    res.json(leads)
  } catch (error) {
    throw error
  }
}

export const createANewLead = async (req, res) => {
  try {
    const response = await postNewLead(req.body)
    res.status(200)
    res.json(response)
  } catch (error) {
    throw error
  }
}
