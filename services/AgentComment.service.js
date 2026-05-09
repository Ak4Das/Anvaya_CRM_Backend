import AgentCommentModel from "../models/AgentComment.model.js"
import LeadModel from "../models/LeadData.model.js"
import { NotFoundError, ValidationError } from "../utils/customErrorHandler.js"

export const createComment = async (req, res) => {
  try {
    const { id: leadId } = req.params
    const { commentText, author } = req.body

    const lead = await LeadModel.findById(leadId)
    if (!lead) {
      throw new NotFoundError("Lead not found!")
    }

    const comment = {
      lead: leadId,
      author: author,
      commentText,
    }

    const Comment = await AgentCommentModel.create(comment)

    res.status(200)
    res.json(Comment)
  } catch (error) {
    if (error.kind === "ObjectId") {
      throw new ValidationError("Id must be a valid ObjectId")
    } else {
      throw error
    }
  }
}

export const getCommentsById = async (req, res) => {
  try {
    const { id: leadId } = req.params

    const lead = await LeadModel.findById(leadId)
    console.log(lead)
    if (!lead) {
      throw new NotFoundError("Lead not found!")
    }

    const comment = await AgentCommentModel.find({ lead: leadId })

    res.status(200)
    res.json(comment)
  } catch (error) {
    if (error.kind === "ObjectId") {
      throw new ValidationError("Id must be a valid ObjectId")
    } else {
      throw error
    }
  }
}
