import express from "express";
import { coffeeMachine } from "../controllers";

const router = express.Router();

router.get("/", coffeeMachine.findAll);

export default router;
