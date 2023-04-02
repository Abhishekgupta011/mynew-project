import React, { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <form>
      <div>
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={handleAmountChange}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={enteredDate}
          onChange={handleDateChange}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;


