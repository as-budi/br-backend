import express from "express";
import { getLotHistories } from "../services/LotHistories.js";

const router = express.Router();

router.get('/lot-histories', getLotHistories);

export default router;