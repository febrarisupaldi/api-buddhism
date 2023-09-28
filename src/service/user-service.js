import { db } from "../app/db.js";
import { ResponseError } from "../error/response-error.js";
import { loginUserValidation, registerUserValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import bcrypt from "bcrypt";

const register = async(req) => {
    const user = validate(registerUserValidation, req);
    const password = await bcrypt.hash(user.password, 10);
    return await db.users.create({
        data:{
            username:user.username,
            password:password,
            name:user.name
        },select:{
            username:true,
            name:true
        }
    });
};

const login = async(req) => {
    const user = validate(loginUserValidation, req);
    const checkUser = await db.users.findUnique({
        where:{
            username:user.username
        }
    });

    if(!checkUser){
        throw new ResponseError('403', 'Invalid User');
    }

    const checkPassword = await bcrypt.compare(user.password, checkUser.password);

    if(!checkPassword){
        throw new ResponseError('403', 'Wrong password');
    }

    return user;
};

export default{
    register,
    login
};