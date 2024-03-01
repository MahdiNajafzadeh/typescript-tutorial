import { Request, Response } from "express"
import timeConverter from "../helper/time.converter"
import { myDataSource } from "../entery/datasource"
import { Task } from "../entery/task.entity"

;(async () => {
	await myDataSource.initialize()
})()

async function getTask(req: Request, res: Response) {
	const { id } = req.params
	try {
		res.json({
			success: true,
			method: "getTask",
			data: "in change ORM",
		}).end()
	} catch (error: any) {
		res.json({
			success: false,
			method: "getTask",
			message: error.message,
		}).end()
	}
}

async function getTasks(req: Request, res: Response) {
	try {
		res.json({
			success: true,
			method: "getTask",
			data: "in change ORM",
		}).end()
	} catch (error: any) {
		res.json({
			success: false,
			method: "getTask",
			message: error.message,
		}).end()
	}
}

async function createTask(req: Request, res: Response) {
	const timeObject = timeConverter(req.body.time)
	req.body.time_string = timeObject.object.toISOString()
	req.body.time = timeObject.object.getTime().toString()
	const task = await myDataSource.getRepository(Task).create(req.body)
	const results = await myDataSource.getRepository(Task).save(task)
	try {
		console.log({
			success: true,
			method: "createTask",
			data: results,
		})
		res.json({
			success: true,
			method: "createTask",
			data: results,
		}).end()
	} catch (error: any) {
		res.status(500)
			.json({
				success: false,
				method: "createTask",
				code: "INTERNAL_ERROR",
				message: error.message,
				error,
			})
			.end()
	}
}

function updateTask(req: Request, res: Response) {}

function deleteTask(req: Request, res: Response) {}

export { getTask, getTasks, createTask, updateTask, deleteTask }
