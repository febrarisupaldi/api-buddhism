import express from "express";
import monasteryController from "../controller/monastery-controller.js";
import userController from "../controller/user-controller.js";

const publicRouter = new express.Router();
publicRouter.post('/api/user/register', userController.registerUser);
publicRouter.post('/api/user/login', userController.loginUser);

publicRouter.get('/api/vihara', monasteryController.getAllMonastery);
publicRouter.get('/api/vihara/:monasteryId', monasteryController.getByIdMonastery);

export{
    publicRouter
};