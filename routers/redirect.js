import express from "express";
import RedirectController from "../controllers/redirectController.js";

const redirectRouter = express.Router();

redirectRouter.get("/:id", RedirectController.get);


export default redirectRouter;