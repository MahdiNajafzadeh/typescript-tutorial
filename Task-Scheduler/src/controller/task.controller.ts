import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import timeConverter from "../helper/time.converter"
const prisma = new PrismaClient()

async function getTask(req: Request, res: Response) {
	const { id } = req.params

	try {
		const task = await prisma.task.findUnique({
			where: {
				id: parseInt(id),
			},
		})
		res.json({
			success: true,
			method: "getTask",
			data: task,
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
		const tasks = await prisma.task.findMany({})
		res.json({
			success: true,
			method: "getTask",
			data: tasks,
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

	console.log(req.body)

	try {
		const task = await prisma.task.create({
			data: req.body,
		})
		res.json({
			success: true,
			method: "createTask",
			data: task,
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
