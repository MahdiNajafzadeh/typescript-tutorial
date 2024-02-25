"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
const create = joi.object({
    name: joi.string().required(),
    family: joi.string().required(),
    age: joi.number().required(),
});
const update = joi
    .object({
    name: joi.string(),
    family: joi.string(),
    age: joi.number(),
})
    .or("name", "family", "age");
const personSchema = {
    POST: create,
    PUT: update,
};
function personBodyValidator(req, res, next) {
    if (personSchema.hasOwnProperty(req.method)) {
        const { error } = personSchema[req.method].validate(req.body);
        if (error) {
            res.status(400)
                .json({
                status: false,
                message: error.message,
                code: "BAD_REQ",
            })
                .end();
            return;
        }
    }
    next();
}
exports.default = personBodyValidator;
