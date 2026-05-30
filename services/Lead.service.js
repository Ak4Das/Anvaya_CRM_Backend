import {
  BadRequestError,
  NotFoundError,
  ValidationError,
} from "../utils/customErrorHandler.js"
import LeadModel from "../models/LeadData.model.js"
import mongoose from "mongoose"

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

export const getLeadsByPropertyInATimeRange = async (req, res) => {
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

    const leads = await LeadModel.find(filter)

    res.status(200)
    res.json({
      success: true,
      message: "Leads fetched successfully",
      respondedData: leads,
    })
  } catch (error) {
    if (error.kind === "ObjectId") {
      throw new ValidationError("Id must be a valid ObjectId")
    } else {
      throw error
    }
  }
}

export const postNewLead = async (req, res) => {
  try {
    const NewLead = new LeadModel(req.body)
    const savedLead = await NewLead.save()
    res.status(200)
    res.json({
      success: true,
      message: "Lead created successfully",
      respondedData: savedLead,
    })
  } catch (error) {
    if (error.cause.code === 11000) {
      const field = Object.keys(error.cause.keyPattern)[0]
      throw new ValidationError(`${field} must be unique`, error.cause)
    } else {
      throw error
    }
  }
}

export const findLeadByIdAndUpdate = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new ValidationError("Invalid lead id")
    }

    const lead = await LeadModel.findById(req.params.id)

    if (!lead) {
      throw new NotFoundError("Lead not found!")
    }

    const updatedLead = await LeadModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    )

    if (!updatedLead) {
      throw new NotFoundError("Lead not found!")
    }

    res.status(200)
    res.json({
      success: true,
      message: "Lead updated successfully",
      respondedData: updatedLead,
    })
  } catch (error) {
    if (error.name === "ValidationError") {
      throw new ValidationError(error.message, error.stack)
    } else if (error.cause.code === 11000) {
      const field = Object.keys(error.cause.keyPattern)[0]
      throw new ValidationError(`${field} must be unique`, error.cause)
    } else {
      throw new BadRequestError(error.message, error.stack)
    }
  }
}
