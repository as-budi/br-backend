import express from "express";
import {
    createDeposit,
    createPayment,
    updateTransaction,
    deleteTransaction,
    getTransactions,
    getTransactionByUserId,
    getTransactionById,
    getDeposits,
    getDepositByUserId,
    getPayments,
    getPaymentByUserId
} from "../services/Transactions.js"
// import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.post('/deposit/:id', createDeposit);
router.post('/payment/:id', createPayment);
router.patch('/transaction/:id', updateTransaction);
router.delete('/transaction/:id', deleteTransaction);
router.get('/transactions/', getTransactions);
router.get('/transactions/:id', getTransactionByUserId);
router.get('/transaction/:id', getTransactionById);
router.get('/deposits', getDeposits);
router.get('/deposits/:id', getDepositByUserId);
router.get('/payments', getPayments);
router.get('/payments/:id', getPaymentByUserId);

export default router;