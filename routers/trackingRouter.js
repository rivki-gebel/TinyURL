import express from "express";
import trackingController from "../controllers/trackingContriller.js";

const trackingRouter = express.Router();

trackingRouter.get("/:id", trackingController.getClicksByTarget);

export default trackingRouter;