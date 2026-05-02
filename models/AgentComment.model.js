import mongoose from "mongoose"

const agentCommentSchema = new mongoose.Schema(
  {
    lead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead",
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SalesAgent",
      required: true,
    },
    commentText: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

const agentComment = mongoose.model("agentComment", agentCommentSchema)

export default agentComment
