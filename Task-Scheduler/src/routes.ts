import { Router } from "express"
import * as taskMiddleware from "./middleware/task.middleware"
import * as taskController from "./controller/task.controller"
import * as infoController from "./controller/info.controller"

const router = Router()

// TASK

router.get("/task/:id", [taskMiddleware.paramsValidator], taskController.getTask)
router.get("/task", taskController.getTasks)
router.post("/task", [taskMiddleware.bodyValidator.createTask], taskController.createTask)
router.put(
	"/task/:id",
	[taskMiddleware.paramsValidator, taskMiddleware.bodyValidator.updateTask],
	taskController.updateTask
)
router.delete("/task/:id", [taskMiddleware.paramsValidator], taskController.deleteTask)

// INFO
router.get("/info", infoController.getInfo)

export default router
