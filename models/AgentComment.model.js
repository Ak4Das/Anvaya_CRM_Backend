import mongoose from "mongoose"

const agentCommentSchema = new mongoose.Schema(
  {
    lead: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "lead must be a valid ObjectId."],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "author must be a valid ObjectId."],
    },
    commentText: {
      type: String,
      required: [true, "Comment text is required."],
    },
  },
  { timestamps: true },
)

const agentComment = mongoose.model("agentComment", agentCommentSchema)

export default agentComment
