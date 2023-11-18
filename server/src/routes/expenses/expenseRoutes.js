const express = require("express");
const {  createExpenseCtrl,
    fetchExpenseCtrl,
    fetchExpensesCtrl,
    updateExpenseCtrl,
    deletExpenseCtrl } = require("../../controllers/expenses/expenseCtrl");
const authMiddleware = require("../../middleware/auth/authMiddleware");
const expenseRoute = express.Router();

expenseRoute.post('/',authMiddleware,createExpenseCtrl);
expenseRoute.get('/',authMiddleware,fetchExpenseCtrl);
expenseRoute.get('/:id',authMiddleware,fetchExpensesCtrl);
expenseRoute.delete('/:id',authMiddleware,deletExpenseCtrl);  
expenseRoute.put('/:id',authMiddleware,updateExpenseCtrl);  //api/income/id
module.exports = expenseRoute;