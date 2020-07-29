import express from "express";
import { coffeePods } from "../controllers";

const router = express.Router();

router.get("/", coffeePods.findAll);

export default router;
