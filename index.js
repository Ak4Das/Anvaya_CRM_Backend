// Connect to Database
import ConnectToDatabase from "./db/db.connect.js"
ConnectToDatabase()

// CREATE SERVER
import express from "express"
const app = express()

// CORS CODE
import cors from "cors"
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json())

// START SERVER
app.listen(3000, () => {
  console.log("Server started at port : ", 3000)
})
