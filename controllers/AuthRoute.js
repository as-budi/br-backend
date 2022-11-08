import express from "express";
import {logIn, logOut, Me} from "../services/Auth.js";

const router = express.Router();

router.get('/me', Me);
router.post('/login', logIn);
router.delete('/logout', logOut);

export default router;