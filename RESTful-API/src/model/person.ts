import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

interface Person {
    id: number
    name: string
    family: string
    age: number
}

async function getAllPerson(): Promise<Person[]> {
    return await prisma.person.findMany({})
}

async function getPerson(id: number) {
    return await prisma.person.findFirst({
        where: {
            id,
        },
    })
}

async function createPerson(person: Person): Promise<Person> {
    return await prisma.person.create({
        data: person,
    })
}

async function updatePerson(id: number, person: Person): Promise<Person> {
    return await prisma.person.update({
        where: {
            id,
        },
        data: person,
    })
}

async function deletePerson(id: number) {
    return await prisma.person.delete({
        where: {
            id,
        },
    })
}

export {
    getPerson as get,
    getAllPerson as getAll,
    createPerson as create,
    updatePerson as update,
    deletePerson as delete,
}
