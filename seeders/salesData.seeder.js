import fs from "fs"
import path from "path"

const filePath = path.join(process.cwd(), "data", "salesData.json")
const salesData = JSON.parse(fs.readFileSync(filePath, "utf-8"))

import SalesDataModel from "../models/SalesData.model.js"

async function SeedSales() {
  try {
    await SalesDataModel.deleteMany({})
    const result = await SalesDataModel.insertMany(salesData)
    return result
  } catch (error) {
    console.log("Failed to add data in Database", error)
  }
}

export default SeedSales
