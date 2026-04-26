import {
  fetchAllAgents,
  fetchAgentByName,
  fetchByIdAndUpdate,
  fetchAgentsByProperty
} from "../controllers/SalesAgent.controller.js"

import express from "express"
const router = express.Router()

router.get("/", fetchAllAgents)

router.get("/name/:name", fetchAgentByName)

router.get("/prop", fetchAgentsByProperty)

router.patch("/update/:id", fetchByIdAndUpdate)

export default router
