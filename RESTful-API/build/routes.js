"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const person_1 = __importDefault(require("./controller/person"));
const person_2 = __importDefault(require("./middleware/person"));
const router = (0, express_1.Router)();
router.use(person_2.default);
router.get("/", person_1.default.getAll);
router.get("/:id", person_1.default.get);
router.post("/", person_1.default.create);
router.put("/:id", person_1.default.update);
router.delete("/:id", person_1.default.delete);
exports.default = router;
