import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "salesAgentData.json")
const salesAgentData = JSON.parse(fs.readFileSync(filePath, "utf-8"))

import SalesAgentModel from "../models/SalesAgent.model.js"

async function SeedSalesAgent() {
  try {
    await SalesAgentModel.deleteMany({})
    const result = await SalesAgentModel.insertMany(salesAgentData)
    return result
  } catch (error) {
    console.log("Failed to add data in Database", error)
  }
}

export default SeedSalesAgent