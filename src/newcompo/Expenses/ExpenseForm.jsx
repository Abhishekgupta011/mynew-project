import React from "react";

const ExpenseForm = () => {
  const handleTitleChange = (event) => {
    console.log(event.target.value);
  };

  const handleAmountChange = (event) => {
    console.log(event.target.value);
  };

  const handleDateChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <form>
      <div>
        <label>Title</label>
        <input type="text" onChange={handleTitleChange} />
      </div>
      <div>
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" onChange={handleAmountChange} />
      </div>
      <div>
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" onChange={handleDateChange} />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;

