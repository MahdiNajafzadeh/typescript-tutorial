import { Request, Response } from "express"

function getInfo(req: Request, res: Response) {
	res.json({
		success: true,
		method: "getInfo",
		data: {
			message: "Server is Healthy",
		},
	}).end()
}

export { getInfo }