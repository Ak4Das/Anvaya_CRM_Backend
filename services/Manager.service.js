import ManagerModel from "../models/Manager.model.js"

export const getManagerByName = async (req, res) => {
  try {
    const { name } = req.params
    const manager = await ManagerModel.find({ name })
    res.status(200)
    res.json(manager)
  } catch (error) {
    throw error
  }
}

export const getAllManagers = async (req, res) => {
  try {
    const managers = await ManagerModel.find()
    res.status(200)
    res.json(managers)
  } catch (error) {
    throw error
  }
}
