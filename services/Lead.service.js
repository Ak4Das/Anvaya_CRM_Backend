import LeadModel from "../models/LeadData.model.js"

export const getAllLeadsCreatedInATimeRange = async (
  firstValue,
  secondValue,
) => {
  try {
    const today = new Date()

    const firstPastDate = new Date()
    firstPastDate.setDate(today.getDate() - firstValue)

    const secondPastDate = new Date()
    secondPastDate.setDate(today.getDate() - secondValue)

    const formatDate = (date) => date.toISOString().split("T")[0]

    const startDate = formatDate(secondPastDate)
    console.log(startDate)
    const endDate = formatDate(firstPastDate)
    console.log(endDate)

    const leads = await LeadModel.find({
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    })
    return leads
  } catch (error) {
    throw error
  }
}
