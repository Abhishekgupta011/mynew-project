import React, { useState } from 'react';
import ExpenseItems from '../newcompo/Expenses/ExpenseItems.js';
import NewExpense from '../newcompo/Expenses/Newexpense.js';


const App = () => {
  const [expenseArray, setExpenseArray] = useState([
    {
      id: 'e1',
      title: 'toilet paper',
      amount: 94.12,
      date: new Date(2019, 3, 18),
      location: 'Los Angeles, CA',
    },
    {
      id: 'e2',
      title: 'groceries',
      amount: 230.56,
      date: new Date(2020, 6, 15),
      location: 'New York, NY',
    },
    {
      id: 'e3',
      title: 'gasoline',
      amount: 50.0,
      date: new Date(2021, 2, 10),
      location: 'Chicago, IL',
    },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenseArray((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };


  return (
    <div>
      <h2>Let's get started</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItems expenses={expenseArray} />
    </div>
  );
};

export default App;

