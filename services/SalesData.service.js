import SalesDataModel from "../models/SalesData.model.js"

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

export const getSalesDataByPropertyInATimeRange = async (
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
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          filter[key] = value
        }
      })

    const salesData = await SalesDataModel.find(filter)

    return salesData
  } catch (error) {
    throw error
  }
}

export const getAllSalesData = async () => {
  try {
    const saleSalesData = await SalesDataModel.find()
    return saleSalesData
  } catch (error) {
    throw error
  }
}
