import Joi from "joi";

const getMonasteryByIdValidation = Joi.number().positive().required();

const insertMonasteryValidation = Joi.object({
    name: Joi.string().max(100).required(),
    address: Joi.string().max(255).required(),
    contact:Joi.string().max(50).allow(null,''),
    latitude: Joi.string().max(20).allow(null,''),
    longitude:Joi.string().max(20).allow(null,''),
    sect_id:Joi.number().allow(null,''),
    foundation_id:Joi.number().allow(null,'')
});

const updateMonasteryValidation = Joi.object({
    name: Joi.string().max(100).required(),
    address: Joi.string().max(255).required(),
    contact:Joi.string().max(50).allow(null,''),
    latitude: Joi.string().max(20).allow(null,''),
    longitude:Joi.string().max(20).allow(null,''),
    sect_id:Joi.number().allow(null,''),
    foundation_id:Joi.number().allow(null,'')
});

const deleteMonasteryValidation = Joi.number().positive().required();

export{
    getMonasteryByIdValidation,
    insertMonasteryValidation,
    updateMonasteryValidation,
    deleteMonasteryValidation
};