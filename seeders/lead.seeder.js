import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "leadData.json")
const leadData = JSON.parse(fs.readFileSync(filePath, "utf-8"))

import LeadModel from "../models/LeadData.model.js"

async function SeedLead() {
  try {
    await LeadModel.deleteMany({})
    const result = await LeadModel.insertMany(leadData)
    return result
  } catch (error) {
    console.log("Failed to add data in Database", error)
  }
}

export default SeedLead