import {
  addComment,
  getCommentsByLeadId,
} from "../controllers/AgentComment.controller.js"

import express from "express"
const router = express.Router()

router.post("/leads/:id/comments", addComment)

router.get("/leads/:id/comments", getCommentsByLeadId)

export default router
