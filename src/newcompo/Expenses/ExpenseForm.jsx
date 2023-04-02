import React, { useState } from "react";

const ExpenseForm = () => {
  const [userInput , SetuserInput] = useState({
    enteredTitle : '',
    enteredAmount : '',
    enteredDate : '',
  });

  const handleTitleChange = (event) => {
    SetuserInput({
      ...userInput,
      enteredTitle : event.target.value,
    });
  };

  const handleAmountChange = (event) => {
    SetuserInput({
      ...userInput,
      enteredAmount : event.target.value,
    });
  };

  const handleDateChange = (event) => {
    SetuserInput({
      ...userInput,
      enteredDate : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    
    console.log(expenseData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={userInput.enteredTitle} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={userInput.enteredAmount}
          onChange={handleAmountChange}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={userInput.enteredDate}
          onChange={handleDateChange}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;



