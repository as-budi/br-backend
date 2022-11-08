import express from "express";
import {
    createBike,
    updateBike,
    deleteBike,
    getBikeById,
    getBikes
} from "../services/Bikes.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.post('/bike', verifyUser, adminOnly, createBike);
router.patch('/bike/:id', verifyUser, adminOnly, updateBike);
router.delete('/bike/:id', verifyUser, adminOnly, deleteBike);
router.get('/bike/:id', verifyUser, adminOnly, getBikeById);
router.get('/bikes', verifyUser, adminOnly, getBikes);

export default router;