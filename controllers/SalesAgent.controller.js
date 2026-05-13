import {
  getAllAgents,
  getAgentByName,
  findByIdAndUpdate,
  getAgentsByProperty,
  postNewAgent,
  getAgentByIdAndDelete
} from "../services/SalesAgent.service.js"
import { asyncHandler } from "../utils/asyncHandler.js"

export const fetchAllAgents = asyncHandler(getAllAgents)

export const fetchAgentByName = asyncHandler(getAgentByName)

export const fetchByIdAndUpdate = asyncHandler(findByIdAndUpdate)

export const fetchAgentsByProperty = asyncHandler(getAgentsByProperty)

export const createANewAgent = asyncHandler(postNewAgent)

export const fetchByIdAndDelete = asyncHandler(getAgentByIdAndDelete)
