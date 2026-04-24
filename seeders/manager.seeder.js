import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "manager.json")
const managerData = JSON.parse(fs.readFileSync(filePath, "utf-8"))

import ManagerModel from "../models/Manager.model.js"

async function SeedManager() {
  try {
    await ManagerModel.deleteMany({})
    const result = await ManagerModel.insertMany(managerData)
    return result
  } catch (error) {
    console.log("Failed to add data in Database", error)
  }
}

export default SeedManager
