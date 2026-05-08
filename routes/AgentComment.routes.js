import {
  addComment,
  getCommentsByLeadId,
} from "../controllers/AgentComment.controller.js"
import { SchemaValidation } from "../middlewares/SchemaValidation.middleware.js"
import { agentCommentSchema } from "../schemas/AgentComment.schema.js"

import express from "express"
const router = express.Router()

router.post(
  "/leads/:id/comments",
  SchemaValidation(agentCommentSchema),
  addComment,
)

router.get("/leads/:id/comments", getCommentsByLeadId)

export default router
