import { Request, Response } from "express"

function getJob(req: Request, res: Response) {
	res.json({
		success: true,
		method: "getJob",
		data: {
			message: "I am in Test",
		},
	}).end()
}

export { getJob }