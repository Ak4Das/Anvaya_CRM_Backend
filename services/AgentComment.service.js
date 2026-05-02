import AgentCommentModel from "../models/AgentComment.model.js"

export const createComment = async (comment) => {
  try {
    const Comment = await AgentCommentModel.create(comment)
    return Comment
  } catch (error) {
    throw error
  }
}

export const getCommentsById = async (leadId) => {
  try {
    const comment = await AgentCommentModel.find({ lead: leadId })
    return comment
  } catch (error) {
    throw error
  }
}
