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
  filters,
) => {
  try {
    const { startDate, endDate } = getStartAndEndDate(minDay, maxDay)

    const filter = {
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    }

    filters &&
      Object.entries(JSON.parse(filters)).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          filter[key] = value
        }
      })

    const leads = await LeadModel.find(filter)

    return leads
  } catch (error) {
    throw error
  }
}

export const postNewLead = async (newLead) => {
  try {
    const NewLead = new LeadModel(newLead)
    await NewLead.save()
    return NewLead
  } catch (error) {
    throw error
  }
}
