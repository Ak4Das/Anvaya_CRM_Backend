import LeadModel from "../models/LeadData.model.js"
import {
  createComment,
  getCommentsById,
} from "../services/AgentComment.service.js"

export const addComment = async (req, res) => {
  try {
    const { id: leadId } = req.params
    const { commentText, author } = req.body

    const lead = await LeadModel.findById(leadId)
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" })
    }

    const comment = {
      lead: leadId,
      author: author,
      commentText,
    }

    const Comment = await createComment(comment)

    res.status(200)
    res.json(Comment)
  } catch (err) {
    res.status(500)
    res.json({ message: err.message })
  }
}

export const getCommentsByLeadId = async (req, res) => {
  try {
    const { id: leadId } = req.params

    const comments = await getCommentsById(leadId)

    res.status(200)
    res.json(comments)
  } catch (err) {
    res.status(500)
    res.json({ message: err.message })
  }
}
