import LeadModel from "../models/LeadData.model.js"

function getStartAndEndDate(minDay, maxDay) {
  const today = new Date()

  const firstPastDate = new Date()
  firstPastDate.setDate(today.getDate() - minDay)

  const secondPastDate = new Date()
  secondPastDate.setDate(today.getDate() - maxDay)

  const formatDate = (date) => date.toISOString().split("T")[0]

  const startDate = formatDate(secondPastDate)
  const endDate = formatDate(firstPastDate)

  return { startDate, endDate }
}

export const getLeadsByPropertyInATimeRange = async (
  minDay,
  maxDay,
  property,
  value,
) => {
  try {
    const { startDate, endDate } = getStartAndEndDate(minDay, maxDay)

    const filter = {
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    }

    if (property && value) {
      filter[property] = value
    }

    const leads = await LeadModel.find(filter)

    return leads
  } catch (error) {
    throw error
  }
}
