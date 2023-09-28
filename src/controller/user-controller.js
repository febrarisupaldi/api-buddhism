import { generateToken } from "../app/jwt.js";
import userService from "../service/user-service.js";

const registerUser = async(req, res, next)=>{
    try {
        const result = await userService.register(req.body);
        res.status(200).json({
            message:"ok",
            data:result
        });
    } catch (error) {
        next(error);
    }
};

const loginUser = async(req, res, next) =>{
    try {
        const result = await userService.login(req.body);
        const token = await generateToken(result);
        res.status(200).json({
            message:"ok",
            _accessToken : token
        });
    } catch (error) {
        next(error);
    }
};

export default{
    registerUser,
    loginUser
};