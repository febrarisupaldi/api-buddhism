import Joi from "joi";

const registerUserValidation = Joi.object({
    username: Joi.string().min(8).max(15).required(),
    password: Joi.string().min(8).max(100).required(),
    name: Joi.string().max(100).required()
});

const loginUserValidation = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
});

export{
    registerUserValidation,
    loginUserValidation
};