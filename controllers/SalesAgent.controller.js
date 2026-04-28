import {
  getAllAgents,
  getAgentByName,
  findByIdAndUpdate,
  getAgentsByProperty,
  postNewAgent
} from "../services/SalesAgent.service.js"

export const fetchAllAgents = async (req, res) => {
  try {
    const saleAgents = await getAllAgents()
    res.status(200)
    res.json(saleAgents)
  } catch (error) {
    throw error
  }
}

export const fetchAgentByName = async (req, res) => {
  try {
    const { name } = req.params
    const agent = await getAgentByName(name)
    res.status(200)
    res.json(agent)
  } catch (error) {
    throw error
  }
}

export const fetchByIdAndUpdate = async (req, res) => {
  try {
    const updatedAgent = await findByIdAndUpdate(req.params.id, req.body)
    res.status(200)
    res.json(updatedAgent)
  } catch (error) {
    throw error
  }
}

export const fetchAgentsByProperty = async (req, res) => {
  try {
    const filters = JSON.parse(decodeURIComponent(req.query.filters))
    const Agents = await getAgentsByProperty(filters)
    res.status(200)
    res.json(Agents)
  } catch (error) {
    throw error
  }
}

export const createANewAgent = async (req, res) => {
  try {
    const response = await postNewAgent(req.body)
    res.status(200)
    res.json(response)
  } catch (error) {
    throw error
  }
}
