const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnect = require("./config/db/dbConnect");
const userRoutes = require("./routes/users/usersRoute");
const { errorHandler, notFound } = require("./middleware/error/errorHandler");
const incomeRoutes = require("./routes/income/incomeRoutes");
const expenseRoutes = require("./routes/expenses/expenseRoutes");
const accountStatsRoute = require("./routes/stats/stats");
//dotenv
dotenv.config();
const app = express();
app.get("/", (req, res) => {
  res.json({
    app: "Expenses-Tracker"
  });
});
//DB
dbConnect();

//-------------
//Middleware
//--------------
app.use(express.json());
//cors
app.use(cors());
//Users route
app.use("/api/users", userRoutes);
//incomeRout
app.use("/api/incomes", incomeRoutes);
//Expenses
app.use("/api/expenses", expenseRoutes);
//stats
app.use("/api/stats", accountStatsRoute);
//err handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;