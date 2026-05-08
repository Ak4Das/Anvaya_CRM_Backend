import mongoose from "mongoose"
import SalesAgentModel from "../models/SalesAgent.model.js"
import {
  BadRequestError,
  NotFoundError,
  ValidationError,
} from "../utils/customErrorHandler.js"

export const getAllAgents = async (req, res) => {
  try {
    const saleAgents = await SalesAgentModel.find()
    res.status(200)
    res.json(saleAgents)
  } catch (error) {
    throw error
  }
}

export const getAgentByName = async (req, res) => {
  try {
    const { name } = req.params
    const agent = await SalesAgentModel.find({ name })
    if (agent.length === 0) {
      throw new NotFoundError("Agent not found")
    }
    res.status(200)
    res.json(agent)
  } catch (error) {
    throw error
  }
}

export const findByIdAndUpdate = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      throw new ValidationError("Invalid agent id")
    }
    const updatedAgent = await SalesAgentModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      },
    )
    if (!updatedAgent) {
      throw new NotFoundError("Agent not found")
    }
    res.status(200)
    res.json(updatedAgent)
  } catch (error) {
    throw error
  }
}

export const getAgentsByProperty = async (req, res) => {
  try {
    if (!req.query.filters) {
      throw new ValidationError("filters query is required")
    }
    const filters = JSON.parse(decodeURIComponent(req.query.filters))

    const filter = {}

    filters &&
      Object.entries(JSON.parse(filters)).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          filter[key] = value
        }
      })

    const Agents = await SalesAgentModel.find(filter)

    res.status(200)
    res.json(Agents)
  } catch (error) {
    throw error
  }
}

export const postNewAgent = async (req, res) => {
  try {
    const NewAgent = new SalesAgentModel(req.body)
    await NewAgent.save()
    res.status(200)
    res.json(NewAgent)
  } catch (error) {
    if (error.name === "ValidationError") {
      throw new ValidationError(error.message)
    } else if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0]
      throw new ValidationError(`${field} must be unique`)
    } else {
      throw error
    }
  }
}
