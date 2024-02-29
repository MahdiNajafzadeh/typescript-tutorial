import { Router } from "express"
import * as controller from "./controller"

const router = Router()
router.get("/job", controller.getJob)

export default router
