import express from "express";
import { jwtMiddleware } from "../middleware/jwt-middleware.js";
import monasteryController from "../controller/monastery-controller.js";

const router = new express.Router();
router.use(jwtMiddleware);

router.post('/api/vihara', monasteryController.insertMonastery);
router.put('/api/vihara/:monasteryId', monasteryController.updateMonastery);


export{
    router
};