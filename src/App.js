import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ListItem from "./components/ListItem";
//import uuid from "uuid/dist/v4";

const initialState = [
  { id: 1, charge: "rent", amount: 1000 },
  { id: 2, charge: "car payment", amount: 600 },
  {
    id: 3,
    charge: "credit cart bill",
    amount: 1200,
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialState);

  return (
    <div>
      <Alert />
      <h1>Budget</h1>
      <main className="App">
        <ExpenseForm />
        <ListItem item={expenses} />
      </main>
      <h1>
        total spending : ${" "}
        <span className="total">
          {expenses.reduce((total, currentValue) => {
            return (total += currentValue.amount);
          }, 0)}
        </span>
      </h1>
    </div>
  );
}

export default App;
