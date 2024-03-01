import { Router } from "express"
import taskMiddleware from "./middleware/task.middleware"
import * as taskController from "./controller/task.controller"
import * as infoController from "./controller/info.controller"

const router = Router()

// TASK

router.get("/task/:id", taskMiddleware.getTask, taskController.getTask)
router.get("/task", taskController.getTasks)
router.post("/task", taskMiddleware.createTask, taskController.createTask)
router.put("/task/:id", taskMiddleware.updateTask, taskController.updateTask)
router.delete("/task/:id", taskMiddleware.getTask, taskController.deleteTask)

// INFO
router.get("/info", infoController.getInfo)

export default router
