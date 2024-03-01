import { Request, Response } from "express"
import * as joi from "joi"

// Regex [s]
const regexTime = {
	date: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|30)$/,
	time: /^([01][0-9]|2[0-3]):[0-5][0-9]$/,
}
const regexEvery =
	/\d+min|\d+hou|\d+day|\d+mon|\d+hou\d+min|\d+day\d+hou\d+min|\d+mon\d+day\d+hou\d+min/

// Schema[s]
// - Params
const paramSchema = joi.object({
	id: joi.string().regex(/\d+/).required(),
})
// - Body
// -- Create Task
const createTaskSchema = joi.object({
	name: joi.string().required(),
	description: joi.string(),
	time: joi
		.object({
			date: joi.string().regex(regexTime.date),
			time: joi.string().regex(regexTime.time),
		})
		.xor("date", "time")
		.required(),
	every: joi.string().regex(regexEvery),
})
// -- Update Task
const updateTaskSchema = joi.object({
	name: joi.string(),
	description: joi.string(),
	time: joi
		.object({
			date: joi.string().regex(regexTime.date).required(),
			time: joi.string().regex(regexTime.time).required(),
		})
		.xor("date", "time"),
	every: joi.string().regex(regexEvery),
})

// middleware function [s]
// - Param Validator
function paramsValidator(req: Request, res: Response, next: Function) {
	const { error } = paramSchema.validate(req.params)
	if (error) {
		res.json({
			success: false,
			code: "BAD_REQ",
			message: error.message,
			error,
		}).end()
		return
	}
	next()
}
// - Body Validator
const bodyValidator = {
	createTask(req: Request, res: Response, next: Function) {
		const { error } = createTaskSchema.validate(req.body)
		if (error) {
			res.json({
				success: false,
				code: "BAD_REQ",
				message: "The request body is not valid.",
				errors: error.details.map((error) => {
					return {
						message: error.message,
					}
				}),
			}).end()
			return
		}
		next()
	},
	updateTask(req: Request, res: Response, next: Function) {
		const { error } = updateTaskSchema.validate(req.body)
		if (error) {
			res.json({
				success: false,
				code: "BAD_REQ",
				message: "The request body is not valid.",
				errors: error.details.map((error) => {
					return {
						message: error.message,
					}
				}),
			}).end()
			return
		}
		next()
	},
}

export default {
	getTask: [paramsValidator],
	createTask: [bodyValidator.createTask],
	updateTask: [paramsValidator, bodyValidator.updateTask],
}
