import { Router } from "express"
import personController from "./controller/person"
import personSchemaValidator from "./middleware/person"

const router = Router()

router.use(personSchemaValidator)
router.get("/", personController.getAll)
router.get("/:id", personController.get)
router.post("/", personController.create)
router.put("/:id", personController.update)
router.delete("/:id", personController.delete)

export default router
