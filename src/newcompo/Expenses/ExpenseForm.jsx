import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) => {
//   const [userInput , SetuserInput] = useState({
//     enteredTitle : '',
//     enteredAmount : '',
//     enteredDate : '',
//   });
const [enteredTitle, setEnteredTitle] = useState("");
const [enteredAmount, setEnteredAmount] = useState("");
const [enteredDate, setEnteredDate] = useState("");
const [enteredLocation , setEnteredLocation] = useState("")

const handleTitleChange = (event) => {
  setEnteredTitle(event.target.value);
};

const handleAmountChange = (event) => {
  setEnteredAmount(event.target.value);
};
const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };
  const handleLocationChange = (event)=>{
    setEnteredLocation(event.target.value);
  }

//   const handleTitleChange = (event) => {
//     SetuserInput({
//       ...userInput,
//       enteredTitle : event.target.value,
//     });
//   };

//   const handleAmountChange = (event) => {
//     SetuserInput({
//       ...userInput,
//       enteredAmount : event.target.value,
//     });
//   };

//   const handleDateChange = (event) => {
//     SetuserInput({
//       ...userInput,
//       enteredDate : event.target.value,
//     });
//   };

//   const handleTitleChange = (event) => {
//     SetuserInput((prevState) => {
//       return {
//         ...prevState,
//         enteredTitle: event.target.value,
//       };
//     });
//   };

//   const handleAmountChange = (event) => {
//     SetuserInput((prevState) => {
//       return {
//         ...prevState,
//         enteredAmount: event.target.value,
//       };
//     });
//   };

//   const handleDateChange = (event) => {
//     SetuserInput((prevState) => {
//       return {
//         ...prevState,
//         enteredDate: event.target.value,
//       };
//     });
//   };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      location: enteredLocation,
    };
    console.log(expenseData)
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  };

  return (
    <form onSubmit={handleSubmit} className="new-expense__controls">
      <div className="new-expense__control label">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={handleTitleChange} />
      </div>
      <div className="new-expense__control input">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="new-expense__control input">
        <label>Location</label>
        <input
            type="text"
            value={enteredLocation}
            onChange={handleLocationChange}
        />
      </div>
      <div className="new-expense__control input">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={enteredDate}
          onChange={handleDateChange}
        />
      </div>
      <button type="button" onClick={props.onCancel} className="new-expense__actions">Cancel</button>
      <button type="submit" className="new-expense__actions">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;



