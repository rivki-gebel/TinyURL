import express from "express";
import UserController from "../controllers/userController.js";


const userRouter = express.Router();

userRouter.get("/", UserController.getList);
userRouter.get("/:id", UserController.getById);
userRouter.post("/", UserController.add);
userRouter.put("/:id", UserController.update);
userRouter.delete("/:id", UserController.delete);

export default userRouter;
