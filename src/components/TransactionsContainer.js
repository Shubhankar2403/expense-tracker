import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";

const Container = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #4a90e2;
  text-align: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 20px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #4a90e2;
    outline: none;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
  }
`;

const TransactionItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const EmptyMessage = styled.p`
  font-size: 1rem;
  color: #888;
  text-align: center;
  margin-top: 20px;
`;

const TransactionsContainer = ({ transactions, removeTransaction }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const filteredData = (searchInput) => {
    if (!searchInput || !searchInput.trim().length) {
      setFilteredTransactions(transactions);
      return;
    }

    const filtered = transactions.filter((item) =>
      item.details.toLowerCase().includes(searchInput.toLowerCase().trim())
    );
    setFilteredTransactions(filtered);
  };

  useEffect(() => {
    filteredData(searchInput);
  }, [transactions, searchInput]);

  return (
    <Container>
      <Heading>Your Transactions</Heading>

      <SearchInput
        type="text"
        placeholder="Search transactions by details..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <TransactionItems>
        {filteredTransactions?.length ? (
          filteredTransactions.map((transaction) => (
            <TransactionItem
              transaction={transaction}
              key={transaction.id}
              removeTransaction={removeTransaction}
            />
          ))
        ) : (
          <EmptyMessage>No Transactions Found</EmptyMessage>
        )}
      </TransactionItems>
    </Container>
  );
};

export default TransactionsContainer;
