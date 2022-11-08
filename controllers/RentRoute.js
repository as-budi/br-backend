import express from "express";
import {
    createRent,
    updateRent,
    deleteRent,
    getRentById,
    getRents
} from "../services/Rents.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.post('/rent', verifyUser, createRent);
router.patch('/rent/:id', verifyUser, updateRent);
router.delete('/rent/:id', verifyUser, adminOnly, deleteRent);
router.get('/rent/:id', verifyUser, getRentById);
router.get('/rents', verifyUser, getRents);

export default router;