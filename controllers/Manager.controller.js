import {
  getManagerByName,
  getAllManagers,
} from "../services/Manager.service.js"
import { asyncHandler } from "../utils/asyncHandler.js"

export const fetchManagerByName = asyncHandler(getManagerByName)

export const fetchAllManagers = asyncHandler(getAllManagers)
