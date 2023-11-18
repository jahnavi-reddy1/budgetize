const express = require("express");
const { createIncome,
    fetchIncomeCtrl,
    fetchIncomesCtrl,
    updateIncomeCtrl,
    deletIncomeCtrl, } = require("../../controllers/income/incomeCtrl");
const authMiddleware = require("../../middleware/auth/authMiddleware");
const incomeRoute = express.Router();

incomeRoute.post('/',authMiddleware, createIncome);
incomeRoute.get('/',authMiddleware, fetchIncomesCtrl);
incomeRoute.get('/:id',authMiddleware, fetchIncomeCtrl);
incomeRoute.delete('/:id',authMiddleware, deletIncomeCtrl); 
incomeRoute.put('/:id',authMiddleware, updateIncomeCtrl);  //api/income/id
module.exports = incomeRoute;