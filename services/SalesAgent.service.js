import SalesAgentModel from "../models/SalesAgent.model.js"

export const getAllAgents = async () => {
  try {
    const saleAgents = await SalesAgentModel.find()
    return saleAgents
  } catch (error) {
    throw error
  }
}

export const getAgentByName = async (name) => {
  try {
    const agent = await SalesAgentModel.find({ name })
    return agent
  } catch (error) {
    throw error
  }
}

export const findByIdAndUpdate = async (id, dataToUpdate) => {
  try {
    const agent = await SalesAgentModel.findOneAndUpdate(
      { _id: id },
      dataToUpdate,
      {
        new: true,
      },
    )
    return agent
  } catch (error) {
    throw error
  }
}

export const getAgentsByProperty = async (filters) => {
  try {
    const filter = {}

    filters &&
      Object.entries(JSON.parse(filters)).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
          filter[key] = value
        }
      })

    const Agents = await SalesAgentModel.find(filter)

    return Agents
  } catch (error) {
    throw error
  }
}

export const postNewAgent = async (newAgent) => {
  try {
    const NewAgent = new SalesAgentModel(newAgent)
    await NewAgent.save()
    return NewAgent
  } catch (error) {
    throw error
  }
}