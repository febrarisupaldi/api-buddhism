import jwt from "jsonwebtoken";

const jwtMiddleware = async (req, res, next) =>{
    if(!req.headers){
        res.status(401).json({
            errors: "Unauthorized"
        }).end();
    }

    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(token == null){
            res.status(401).json({
                errors: "Unauthorized"
            }).end();
        }

        const payload = await jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.payload = payload;
    } catch (error) {
        if(error.name === 'TokenExpiredError'){
            res.status(401).json({
                errors: "Token Expired"
            }).end();
        }

        res.status(401).json({
            errors: "Unauthorized"
        }).end();
    }

    return next();
};

export{
    jwtMiddleware
};