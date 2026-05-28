import mongoose from "mongoose"

const addEventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Event title is required."],
      trim: true,
    },

    start: {
      type: Date,
      required: [true, "Start date/time is required."],
    },

    end: {
      type: Date,
      required: [true, "End date/time is required."],
      validate: {
        validator: function (value) {
          return value > this.start
        },
        message: "End date/time must be after start date/time.",
      },
    },
  },
  {
    timestamps: true,
  },
)

const Event = mongoose.model("Event", addEventSchema)

export default Event
