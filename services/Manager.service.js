import ManagerModel from "../models/Manager.model.js";

export const getManagerByName = async (name) => {
  try {
    const manager = await ManagerModel.find({ name })
    return manager
  } catch (error) {
    throw error
  }
}

export const getAllManagers = async () => {
  try {
    const managers = await ManagerModel.find()
    return managers
  } catch (error) {
    throw error
  }
}