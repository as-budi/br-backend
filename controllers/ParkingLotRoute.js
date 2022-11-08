import express from "express";
import {
    createParkingLot,
    updateParkingLot,
    deleteParkingLot,
    getParkigLotById,
    getParkingLots
} from "../services/ParkingLots.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.post('/lot', verifyUser, adminOnly, createParkingLot);
router.patch('/lot/:id', verifyUser, adminOnly, updateParkingLot);
router.delete('/lot/:id', verifyUser, adminOnly, deleteParkingLot);
router.get('/lot/:id', verifyUser, adminOnly, getParkigLotById);
router.get('/lots', verifyUser, adminOnly, getParkingLots);

export default router;