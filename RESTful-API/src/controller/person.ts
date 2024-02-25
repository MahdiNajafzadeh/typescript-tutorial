import { Request, Response } from "express"
import * as modelPerson from "../model/person"

async function getPerson(req: Request, res: Response) {
    try {
        const id: number = parseInt(req.params.id)
        const person = await modelPerson.get(id)
        res.status(200)
            .json({
                status: true,
                mothod: "get person",
                data: person,
            })
            .end()
    } catch (error: any) {
        res.status(500)
            .json({
                status: false,
                mothod: "get person",
                message: error.message,
                code: "INTERNAL_ERROR",
            })
            .end()
    }
}

async function getAllPerson(req: Request, res: Response) {
    try {
        const allPerson = await modelPerson.getAll()
        res.status(200)
            .json({
                status: true,
                mothod: "get all person",
                data: allPerson,
            })
            .end()
    } catch (error: any) {
        res.status(500)
            .json({
                status: false,
                mothod: "get person",
                message: error.message,
                code: "INTERNAL_ERROR",
            })
            .end()
    }
}

async function createPerson(req: Request, res: Response) {
    try {
        const person = await modelPerson.create(req.body)
        res.status(200)
            .json({
                status: true,
                mothod: "create person",
                data: person,
            })
            .end()
    } catch (error: any) {
        res.status(500)
            .json({
                status: false,
                mothod: "create person",
                message: error.message,
                code: "INTERNAL_ERROR",
            })
            .end()
    }
}

async function updatePerson(req: Request, res: Response) {
    try {
        const id: number = parseInt(req.params.id)
        const person = await modelPerson.update(id, req.body)
        res.status(200)
            .json({
                status: true,
                mothod: "update person",
                data: person,
            })
            .end()
    } catch (error: any) {
        res.status(500)
            .json({
                status: false,
                mothod: "update person",
                message: error.message,
                code: "INTERNAL_ERROR",
            })
            .end()
    }
}

async function deletePerson(req: Request, res: Response) {
    try {
        const id: number = parseInt(req.params.id)
        const person = await modelPerson.delete(id)
        res.status(200)
            .json({
                status: true,
                mothod: "delete person",
                data: person,
            })
            .end()
    } catch (error: any) {
        res.status(500)
            .json({
                status: false,
                mothod: "delete person",
                message: error.message,
                code: "INTERNAL_ERROR",
            })
            .end()
    }
}

export default {
    get: getPerson,
    getAll: getAllPerson,
    create: createPerson,
    update: updatePerson,
    delete: deletePerson,
}
