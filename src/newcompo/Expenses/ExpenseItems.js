import { useState } from 'react';
import ExpenseDetails from './ExpenseDetails';

import './Expenseitems.css';
import Card from '../../UI/Card.js';
import ExpenseFilter from './ExpenseFilter';

 const ExpenseItems = (props) => {
//     const [title, updatedTitle] = useState(props.title);
//     const clickHandler = () => {
//         updatedTitle('updated');
//         console.log('update');
//     };

//     const [amount, updatedExpense] = useState(props.amount);
//     const expenseHandler = () => {
//         updatedExpense(100);
//     };

    // const deleteExpenseHandler = () => {
    //     const expenseItem = document.querySelector(`.expense-${props.id}`);
    //     if (expenseItem) {
    //         expenseItem.parentNode.removeChild(expenseItem);
    //         console.log('delete');
    //     } else {
    //         console.log(`Element with ID expense not found.`);
    //     }
    // };

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpense = props.expenses.filter(expense =>{
        return expense.date.getFullYear().toString() ===filteredYear;
    })
    let expenseContent = <p>No expenses found.</p>
    if(filteredExpense.length>0){
        expenseContent = filteredExpense.map((expense) => (
            <ExpenseDetails
                key = {expense.id}
                amount={expense.amount}
                location={expense.location}
                title={expense.title}
                date = {expense.date}
                
            />
        ))
    }

    return (
        <Card className="expense">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expenseContent}
            {/* <button onClick={expenseHandler}>Change Expense</button>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={deleteExpenseHandler}>Delete Expense</button> */}
        </Card>
    );
};

export default ExpenseItems;
