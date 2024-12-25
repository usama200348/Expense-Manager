import React, { useState } from "react";
import Header from "../src/Components/Header";
import BalanceDisplay from "../src/Components/BalanceDisplay";
import ExpenseForm from "../src/Components/ExpenseForm";
import ExpenseList from "../src/Components/ExpenseList";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const balance = transactions.reduce(
    (acc, item) => acc + (item.type === "cash-in" ? item.amount : -item.amount),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <Header />
      <div className="w-full max-w-lg">
        <BalanceDisplay balance={balance} />
        <ExpenseForm onAddTransaction={addTransaction} />
        <ExpenseList transactions={transactions} />
      </div>
    </div>
  );
};

export default App;
