import { Request, Response } from "express"
import joi = require("joi")

const create = joi.object({
    name: joi.string().required(),
    family: joi.string().required(),
    age: joi.number().required(),
})

const update = joi
    .object({
        name: joi.string(),
        family: joi.string(),
        age: joi.number(),
    })
    .or("name", "family", "age")

interface PersonSchema {
    [key: string]: joi.ObjectSchema<any>
}

const personSchema: PersonSchema = {
    POST: create,
    PUT: update,
}

function personBodyValidator(req: Request, res: Response, next: Function) {
    if (personSchema.hasOwnProperty(req.method)) {
        const { error } = personSchema[req.method].validate(req.body)
        if (error) {
            res.status(400)
                .json({
                    status: false,
                    message: error.message,
                    code: "BAD_REQ",
                })
                .end()
            return
        }
    }

    next()
}

export default personBodyValidator
