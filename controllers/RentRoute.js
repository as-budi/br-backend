import express from "express";
import {
    createRent,
    updateRent,
    deleteRent,
    getRentById,
    getRents,
    rentRequest,
    rentConfirm,
    rentStart,
    rentFinish,
    rentFinishConfirm
} from "../services/Rents.js"
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.post('/rent', verifyUser, createRent);
router.patch('/rent/:id', verifyUser, updateRent);
router.delete('/rent/:id', verifyUser, adminOnly, deleteRent);
router.get('/rent/:id', verifyUser, getRentById);
router.get('/rents', verifyUser, getRents);
router.get('/rent-request/:id', verifyUser, rentRequest);
router.post('/rent-confirm', verifyUser, rentConfirm);
router.post('/rent-start', verifyUser, rentStart);
router.post('/rent-finish', verifyUser, rentFinish);
router.post('/rent-finish-confirm', verifyUser, rentFinishConfirm);

export default router;