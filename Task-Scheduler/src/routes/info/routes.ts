import { Router } from "express"
import * as controller from "./controller"

const router = Router()
router.get("/info", controller.getInfo)

export default router
