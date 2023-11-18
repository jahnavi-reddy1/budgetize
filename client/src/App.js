import { BrowserRouter, Route, Routes } from "react-router-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import NewRecord from "./components/Add/NewRecordForm";
import Home from "./pages/Home";

import IncomeList from "./pages/Income/IncomeList";
import Navbar from "./components/Navigation/Navbar";
import Profile from "./pages/Users/Profile/Profile";
import Register from "./pages/Users/Register/Register";
import Login from "./pages/Users/Login/Login";
import ExpensesList from "./pages/Expenses/ExpensesList";
import Dashboard from "./pages/Dashboard/Dashboard";

import EditContent from "./components/EditContent/EditContent";
import UserProfileExpList from "./pages/Users/Profile/UserProfileExpList";
import UserProfileIncList from "./pages/Users/Profile/UserProfileIncList";
import UpdateProfile from "./pages/Users/Profile/UpdateProfile";
import AddIncome from "./pages/Income/AddIncome";
import AddExpense from "./pages/Expenses/AddExpense";
import PrivateProtectRoute from "./components/Navigation/PrivateProtectRoute";
import AdminRoute from "./components/Navigation/AdminRoute";
import NotAdmin from "./components/NotAdmin/NotAdmin";

const options = {
  timeout: 50000,
  position: positions.BOTTOM_CENTER,
};


function App()  {
  return (
    <Provider template={AlertTemplate} {...options}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route
            exact
            path="/user-profile-expenses"
            element={<UserProfileExpList/>}
          />
          <Route
            exact
            path="/user-profile-income"
            element={<UserProfileIncList/>}
          />
          <Route exact path="/not-admin" element={<NotAdmin/>} />

          <Route
            exact
            path="/update-profile"
            element={<UpdateProfile/>}
          />

          <Route exact path="/edit" element={<EditContent/>} />
          {/* <PrivateProtectRoute
            exact
            path="/user-expenses"
            component={UserExpenses}
          /> */}
          <Route
            exact
            path="/add-expense"
            element={<AddExpense/>}
          />
          <Route exact path="/add-income" element={<AddIncome/>} />

          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/incomes" element={<UserProfileIncList/>} />
          <Route
            exact
            path="/expenses"
            element={<UserProfileExpList/>}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;