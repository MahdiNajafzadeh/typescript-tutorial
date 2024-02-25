"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const modelPerson = __importStar(require("../model/person"));
function getPerson(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = parseInt(req.params.id);
            const person = yield modelPerson.get(id);
            res.status(200)
                .json({
                status: true,
                mothod: "get person",
                data: person,
            })
                .end();
        }
        catch (error) {
            res.status(500)
                .json({
                status: false,
                mothod: "get person",
                message: error.message,
                code: "INTERNAL_ERROR",
            })
                .end();
        }
    });
}
function getAllPerson(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const allPerson = yield modelPerson.getAll();
            res.status(200)
                .json({
                status: true,
                mothod: "get all person",
                data: allPerson,
            })
                .end();
        }
        catch (error) {
            res.status(500)
                .json({
                status: false,
                mothod: "get person",
                message: error.message,
                code: "INTERNAL_ERROR",
            })
                .end();
        }
    });
}
function createPerson(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const person = yield modelPerson.create(req.body);
            res.status(200)
                .json({
                status: true,
                mothod: "create person",
                data: person,
            })
                .end();
        }
        catch (error) {
            res.status(500)
                .json({
                status: false,
                mothod: "create person",
                message: error.message,
                code: "INTERNAL_ERROR",
            })
                .end();
        }
    });
}
function updatePerson(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = parseInt(req.params.id);
            const person = yield modelPerson.update(id, req.body);
            res.status(200)
                .json({
                status: true,
                mothod: "update person",
                data: person,
            })
                .end();
        }
        catch (error) {
            res.status(500)
                .json({
                status: false,
                mothod: "update person",
                message: error.message,
                code: "INTERNAL_ERROR",
            })
                .end();
        }
    });
}
function deletePerson(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = parseInt(req.params.id);
            const person = yield modelPerson.delete(id);
            res.status(200)
                .json({
                status: true,
                mothod: "delete person",
                data: person,
            })
                .end();
        }
        catch (error) {
            res.status(500)
                .json({
                status: false,
                mothod: "delete person",
                message: error.message,
                code: "INTERNAL_ERROR",
            })
                .end();
        }
    });
}
exports.default = {
    get: getPerson,
    getAll: getAllPerson,
    create: createPerson,
    update: updatePerson,
    delete: deletePerson,
};
