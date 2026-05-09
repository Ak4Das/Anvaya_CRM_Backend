import {
  createComment,
  getCommentsById,
} from "../services/AgentComment.service.js"
import { asyncHandler } from "../utils/asyncHandler.js"

export const addComment = asyncHandler(createComment)

export const getCommentsByLeadId = asyncHandler(getCommentsById)