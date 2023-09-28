import { db } from "../app/db.js";
import { ResponseError } from "../error/response-error.js";
import { getMonasteryByIdValidation, insertMonasteryValidation, updateMonasteryValidation } from "../validation/monastery-validation.js";
import { validate } from "../validation/validation.js";

const checkMonasteryExists = async(monasteryId) => {
    monasteryId = validate(getMonasteryByIdValidation, monasteryId);
    const monastery = await db.monastery.findFirst({
        where:{
            id:monasteryId
        }
    });

    if(!monastery){
        throw new ResponseError(404, "monastery is not found");
    }

    return monasteryId;
};

const getAll = async() =>{
    const monastery = await db.monastery.findMany();

    if(!monastery){
        throw new ResponseError("404", "data not found");
    }

    return monastery;
};

const getById = async(monasteryId) => {
    monasteryId = validate(getMonasteryByIdValidation, monasteryId);
    const monastery = await db.monastery.findFirst({
        where:{
            id:monasteryId
        }
    });

    if(!monastery){
        throw new ResponseError(404, "monastery is not found");
    }

    return monastery;
};

const insert = async (req) => {
    const monastery = validate(insertMonasteryValidation, req);
    const result = await db.monastery.create({
        data:monastery,
        include:{
            sect:true,
            foundation:true
        }
    });

    if(!result){
        throw new ResponseError(500, "Error input monastery");
    }

    return result;
};

const update = async(monasteryId, req)=>{
    const monastery = validate(updateMonasteryValidation, req);
    monasteryId = await checkMonasteryExists(monasteryId);


    const totalMonastery = await db.monastery.count({
        where:{
            id:monasteryId
        }
    });

    if(totalMonastery !== 1){
        throw new ResponseError(404, "monastery is not found");
    }

    return await db.monastery.update({
            where: {
                id: monasteryId
            },
            data:{
                name:monastery.name,
                address:monastery.address,
                contact:monastery.contact,
                latitude:monastery.latitude,
                longitude:monastery.longitudem,
                sect_id:monastery.sect_id,
                foundation_id:monastery.foundation_id
            }
        }
    );
};

export default{
    getAll,
    getById,
    insert,
    update
};