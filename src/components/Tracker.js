import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddTransaction from "./AddTransaction";
import OverviewComponent from "./OverviewComponents";
import TransactionsContainer from "./TransactionsContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  max-width: 90%;
  background-color: #e0f7fa;
  padding: 30px;
  border: 1px solid #b0bec5;
  border-radius: 15px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
`;

const Heading = styled.h1`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #37474f;
  margin-bottom: 30px;
  z-index: 1;
`;

const TransactionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 30px 0;
  z-index: 1;
`;

const ExpenseBox = styled.div`
  flex: 1;
  border: 1px solid #ff6f00;
  border-radius: 10px;
  padding: 20px;
  background-color: #ff8a80;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #37474f;
  z-index: 1;

  & span {
    font-weight: bold;
    font-size: 24px;
    color: #d32f2f;
    display: block;
    margin-top: 10px;
  }
`;

const IncomeBox = styled(ExpenseBox)`
  background-color: #b9f6ca;
  border-color: #00c853;

  & span {
    color: #388e3c;
  }
`;

const Tracker = () => {
  const [toggle, setToggle] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const AddTransactions = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    setTransactions(transactionArray);
  };

  const removeTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const calculateTransactions = () => {
    let exp = 0;
    let inc = 0;

    transactions.map((item) => {
      item.transType === "expense"
        ? (exp = exp + item.amount)
        : (inc = inc + item.amount);
      return null;
    });

    setExpense(exp);
    setIncome(inc);
  };

  useEffect(() => {
    calculateTransactions();
  }, [transactions]);

  return (
    <Container>
      <OverviewComponent
        toggle={toggle}
        setToggle={setToggle}
        expense={expense}
        income={income}
      />

      {toggle && (
        <AddTransaction
          setToggle={setToggle}
          AddTransactions={AddTransactions}
        />
      )}

      <TransactionDetails>
        <ExpenseBox>
          Expense <span>₹{expense}</span>
        </ExpenseBox>

        <IncomeBox>
          Budget <span>₹{income}</span>
        </IncomeBox>
      </TransactionDetails>

      <TransactionsContainer
        transactions={transactions}
        removeTransaction={removeTransaction}
      />
    </Container>
  );
};

export default Tracker;
