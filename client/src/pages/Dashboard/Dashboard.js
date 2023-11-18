import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userProfileAction } from "../../redux/slices/users/usersSlices";
import calTransaction from "../../utils/accStatistics";
//import DashboardData from "../../../components/Dashboard/DashboardData";
import navigate from "../../utils/navigate";
import UserProfileStats from "../../pages/Users/Profile/UserProfileStats.js";
import DataGraph from "../../components/Dashboard/DataGrap.js";
//import useDateFormatter from "../../../hooks/useDateFormatter";
import LoadingComponent from "../../components/Loading/Loading";
import ErrorDisplayMessage from "../../components/ErrorDisplayMessage";

const Dashboard = () => {
  const [expResult, setExpResult] = useState([]);
  const [incResult, setIncResult] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userProfileAction());
  }, []);
  //history
  const history = useNavigate();
  const users = useSelector(state => state?.users);
  const { profile, userLoading, userAppErr, userServerErr, userAuth } = users;

  //income
  useEffect(() => {
    if (profile?.expenses) {
      const expenses = calTransaction(profile?.expenses);
      setExpResult(expenses);
    }
    if (profile?.income) {
      const income = calTransaction(profile?.income);
      setIncResult(income);
    }
  }, [profile?.income]);

  // console.log(results);
  // const income = profile?.income;
  // const totalIncome = income
  //   ?.map(inc => inc?.amount)
  //   .reduce((acc, curr) => {
  //     return acc + curr;
  //   }, 0);

  // //Total Expenses
  // const expenses = profile?.expenses;
  // const totalExp = expenses
  //   ?.map(inc => inc?.amount)
  //   .reduce((acc, curr) => {
  //     return acc + curr;
  //   }, 0);

  // //Average expenses
  // const averageExp = totalExp / 2;

  // //min Expense

  // const expensesArr = profile?.expenses?.map(exp => exp?.amount);
  // const minExpenses = Math.min(...expensesArr);
  // const maxExpenses = Math.max(...expensesArr);

  // console.log(maxExpenses, totalExp);

  return (
    <>
      {userLoading ? (
        <LoadingComponent />
      ) : userAppErr || userServerErr ? (
        <>
          <ErrorDisplayMessage>
            {userServerErr} {userAppErr}
          </ErrorDisplayMessage>
        </>
      ) : (
        <section className="py-5">
          <div className="container">
            <div className="position-relative p-8 border rounded-2">
                  
                <DataGraph
                  income={incResult?.sumTotal}
                  expenses={expResult?.sumTotal}
                />
              </div>

              <p className="mb-8"> </p>

              <UserProfileStats
                numOfTransExp={profile?.expenses?.length}
                avgExp={expResult?.avg}
                totalExp={expResult?.sumTotal}
                minExp={expResult?.min}
                maxExp={expResult?.max}
                numOfTransInc={profile?.income?.length}
                avgInc={incResult?.avg}
                totalInc={incResult?.sumTotal}
                minInc={incResult?.min}
                maxInc={incResult?.max}
              />
              
            </div>
       
        </section>
      )}
    </>
  );
};

export default Dashboard;