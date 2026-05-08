import {
  fetchAllAgents,
  fetchAgentByName,
  fetchByIdAndUpdate,
  fetchAgentsByProperty,
  createANewAgent,
} from "../controllers/SalesAgent.controller.js"
import { agentSchema } from "../schemas/SalesAgent.schema.js"
import { SchemaValidation } from "../middlewares/SchemaValidation.middleware.js"

import express from "express"
const router = express.Router()

router.get("/", fetchAllAgents)

router.get("/name/:name", fetchAgentByName)

router.get("/prop", fetchAgentsByProperty)

router.patch("/update/:id", fetchByIdAndUpdate)

router.post("/addAgent", SchemaValidation(agentSchema), createANewAgent)

export default router
