import monasteryService from "../service/monastery-service.js";

const getAllMonastery = async(req, res, next) =>{
    try {
        const result = await monasteryService.getAll();
        res.status(200).json({
            message:"ok",
            data:result
        });
    } catch (error) {
        next(error);
    }
};

const getByIdMonastery = async(req, res, next) => {
    try {
        const monasteryId = req.params.monasteryId;
        const result = await monasteryService.getById(monasteryId);
        res.status(200).json({
            message:"ok",
            data:result
        });
    } catch (error) {
        next(error);
    }
};

const insertMonastery = async (req, res, next) => {
    try {
        const result = await monasteryService.insert(req.body);
        res.status(200).json({
            message:"ok",
            data:result
        });
    } catch (error) {
        next(error);
    }
};

const updateMonastery = async(req, res, next) => {
    try {
        const monasteryId = req.params.monasteryId;
        const request = req.body;
        
        const result = await monasteryService.update(monasteryId, request);

        res.status(200).json({
            message:"ok",
            data:result
        });
    } catch (error) {
        next(error);
    }
};

export default{
    getAllMonastery,
    getByIdMonastery,
    insertMonastery,
    updateMonastery
};