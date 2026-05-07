import { ValidationError } from "../utils/customErrorHandler.js"
import LeadModel from "../models/LeadData.model.js"

function getStartAndEndDate(minDay, maxDay) {
  const today = new Date() // 2026-04-24

  const firstPastDate = new Date()
  firstPastDate.setDate(today.getDate() - minDay)

  const secondPastDate = new Date()
  secondPastDate.setDate(today.getDate() - maxDay)

  const formatDate = (date) => date.toISOString().split("T")[0]

  const startDate = formatDate(secondPastDate)
  const endDate = formatDate(firstPastDate)

  return { startDate, endDate }
}

export const getLeadsByPropertyInATimeRange = async (
  minDay,
  maxDay,
  filters,
) => {
  try {
    const { startDate, endDate } = getStartAndEndDate(minDay, maxDay)

    const filter = {
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    }

    filters &&
      Object.entries(JSON.parse(filters)).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          filter[key] = value
        }
      })

    const leads = await LeadModel.find(filter)

    return leads
  } catch (error) {
    throw error
  }
}

export const postNewLead = async (req, res) => {
  try {
    const NewLead = new LeadModel(req.body)
    const savedLead = await NewLead.save()
    res.status(200)
    res.json(savedLead)
  } catch (error) {
    if (
      error.cause?.code === 11000 &&
      error.message === "leadCode must be unique"
    ) {
      throw new ValidationError("leadCode must be unique!", error.cause)
    } else {
      throw error
    }
  }
}

export const findLeadByIdAndUpdate = async (id, dataToUpdate) => {
  try {
    const lead = await LeadModel.findByIdAndUpdate(id, dataToUpdate, {
      new: true,
    })
    return lead
  } catch (error) {
    throw error
  }
}
