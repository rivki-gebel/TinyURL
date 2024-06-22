import express from "express";
import LinkController from "../controllers/linkCntroller.js";

const linkRouter = express.Router();

linkRouter.get("/", LinkController.getList);
linkRouter.get("/:id", LinkController.getById);
linkRouter.post("/", LinkController.add);
linkRouter.put("/:id", LinkController.update);
linkRouter.delete("/:id", LinkController.delete);

export default linkRouter;