import {
  fetchAllAgents,
  fetchAgentByName,
  fetchByIdAndUpdate,
  fetchAgentsByProperty,
  createANewAgent,
  fetchByIdAndDelete
} from "../controllers/SalesAgent.controller.js"
import { agentSchema } from "../schemas/SalesAgent.schema.js"
import { SchemaValidation } from "../middlewares/SchemaValidation.middleware.js"
import { agentFiltersSchema } from "../schemas/SalesAgentFilters.schema.js"
import { FiltersValidation } from "../middlewares/SchemaValidation.middleware.js"

import express from "express"
const router = express.Router()

router.get("/", fetchAllAgents)

router.get("/name/:name", fetchAgentByName)

router.get(
  "/prop",
  FiltersValidation(agentFiltersSchema),
  fetchAgentsByProperty,
)

router.patch(
  "/update/:id",
  SchemaValidation(agentFiltersSchema),
  fetchByIdAndUpdate,
)

router.post("/addAgent", SchemaValidation(agentSchema), createANewAgent)

router.delete("/delete/:id", fetchByIdAndDelete)

export default router
