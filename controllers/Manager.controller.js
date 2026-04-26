import {
  getManagerByName,
  getAllManagers,
} from "../services/Manager.service.js"

export const fetchManagerByName = async (req, res) => {
  try {
    const { name } = req.params
    const manager = await getManagerByName(name)
    res.status(200)
    res.json(manager)
  } catch (error) {
    throw error
  }
}

export const fetchAllManagers = async (req, res) => {
  try {
    const managers = await getAllManagers()
    res.status(200)
    res.json(managers)
  } catch (error) {
    throw error
  }
}
