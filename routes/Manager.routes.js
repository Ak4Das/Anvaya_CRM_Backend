import {
  fetchManagerByName,
  fetchAllManagers,
} from "../controllers/Manager.controller.js"

import express from "express"
const router = express.Router()

router.get("/", fetchAllManagers)

router.get("/name/:name", fetchManagerByName)

export default router
