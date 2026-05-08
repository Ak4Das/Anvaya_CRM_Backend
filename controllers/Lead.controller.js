import { asyncHandler } from "../utils/asyncHandler.js"
import {
  getLeadsByPropertyInATimeRange,
  postNewLead,
  findLeadByIdAndUpdate,
} from "../services/Lead.service.js"

export const fetchLeadsByPropertyInATimeRange = asyncHandler(
  getLeadsByPropertyInATimeRange,
)

export const createANewLead = asyncHandler(postNewLead)

export const updateLead = asyncHandler(findLeadByIdAndUpdate)
