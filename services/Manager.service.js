import ManagerModel from "../models/Manager.model.js"

export const getManagerByName = async (req, res) => {
  try {
    const { name } = req.params
    const manager = await ManagerModel.find({ name })
    res.status(200)
    res.json({
      success: true,
      message: "Manager fetched successfully",
      respondedData: manager,
    })
  } catch (error) {
    throw error
  }
}

export const getAllManagers = async (req, res) => {
  try {
    const managers = await ManagerModel.find()
    res.status(200)
    res.json({
      success: true,
      message: "Managers fetched successfully",
      respondedData: managers,
    })
  } catch (error) {
    throw error
  }
}
