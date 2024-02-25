"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete = exports.update = exports.create = exports.getAll = exports.get = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getAllPerson() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.person.findMany({});
    });
}
exports.getAll = getAllPerson;
function getPerson(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.person.findFirst({
            where: {
                id,
            },
        });
    });
}
exports.get = getPerson;
function createPerson(person) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.person.create({
            data: person,
        });
    });
}
exports.create = createPerson;
function updatePerson(id, person) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.person.update({
            where: {
                id,
            },
            data: person,
        });
    });
}
exports.update = updatePerson;
function deletePerson(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.person.delete({
            where: {
                id,
            },
        });
    });
}
exports.delete = deletePerson;
