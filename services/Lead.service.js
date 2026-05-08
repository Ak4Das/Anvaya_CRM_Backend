import {
  BadRequestError,
  NotFoundError,
  ValidationError,
} from "../utils/customErrorHandler.js"
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

export const getLeadsByPropertyInATimeRange = async (req, res) => {
  try {
    const { minDay, maxDay, filters } = req.query

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

    if (!leads.length) {
      throw new NotFoundError("Leads not found!")
    }

    res.status(200)
    res.json(leads)
  } catch (error) {
    throw new BadRequestError(error.message, error.stack)
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

export const findLeadByIdAndUpdate = async (req, res) => {
  try {
    const lead = await LeadModel.findById(req.params.id)

    if (!lead) {
      throw new NotFoundError("Lead not found!")
    }

    const updatedLead = await LeadModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    )

    res.status(200)
    res.json(updatedLead)
  } catch (error) {
    if (error.kind === "ObjectId") {
      throw new BadRequestError(error.reason.message, error.reason.stack)
    } else {
      throw new BadRequestError(error.message, error.stack)
    }
  }
}
