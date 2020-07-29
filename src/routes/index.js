import express from "express";

import machineRouter from "./coffeeMachine";
import podsRouter from "./coffeePods";

const router = express.Router();

router.use("/machine", machineRouter);
router.use("/pod", podsRouter);

export default router;
