import { useState } from 'react';
import ExpenseList from './ExpenseList';
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
    

    return (
        <Card className="expense">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseList expense ={filteredExpense}/>
            {/* <button onClick={expenseHandler}>Change Expense</button>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={deleteExpenseHandler}>Delete Expense</button> */}
        </Card>
    );
};

export default ExpenseItems;
