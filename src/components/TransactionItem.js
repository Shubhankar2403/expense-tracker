import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e6e8e9;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px 20px;
  border-left: 6px solid ${(props) => (props.isExpense ? "#FF5252" : "#4CAF50")};
  margin-bottom: 15px;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Details = styled.div`
  flex: 2;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;

const Amount = styled.div`
  flex: 1;
  text-align: right;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => (props.isExpense ? "#FF5252" : "#4CAF50")};
  margin-right: 20px;
`;

const RemoveButton = styled.button`
  background-color: #FF5252;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #D32F2F;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px #FF5252;
  }
`;

const TransactionItem = ({ transaction, removeTransaction }) => {
  return (
    <Item isExpense={transaction?.transType === "expense"}>
      <Details>{transaction.details}</Details>
      <Amount isExpense={transaction?.transType === "expense"}>
        {transaction.transType === "expense" ? `- ₹${transaction.amount}` : `+ ₹${transaction.amount}`}
      </Amount>
      <RemoveButton onClick={() => removeTransaction(transaction.id)}>
        Remove
      </RemoveButton>
    </Item>
  );
};

export default TransactionItem;
