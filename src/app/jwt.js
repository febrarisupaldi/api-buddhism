import jwt  from "jsonwebtoken";

const generateToken = async (user) =>{
    return await jwt.sign({userId:user.username}, process.env.JWT_ACCESS_SECRET, {
        expiresIn:'1h'
    });
};

export {
    generateToken
};