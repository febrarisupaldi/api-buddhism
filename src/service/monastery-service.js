import { db } from "../app/db";
import { insertMonasteryValidation } from "../validation/monastery-validation";
import { validate } from "../validation/validation";

const insert = async(req)=>{
    const monastery = validate(insertMonasteryValidation, req);

    const result = await db.monastery.create({
        data:monastery
    });

    console.log(result);
};