import { useState } from 'react';
import ExpenseDetails from './ExpenseDetails'
import ExpenseDate from './ExpenseDate';
import './Expenseitems.css';
import Card from '../../UI/Card.js'
import ExpenseFilter from './ExpenseFilter';
const ExpenseItems = (props) =>{
    const [title , UpdatedTitle] = useState(props.title)
    const clickHandler = ()=>{
        UpdatedTitle('updated')
        console.log('update')
    }
    const [amount , UpdatedExpense] = useState(props.amount)
    const ExpenseHandler = ()=>{
        UpdatedExpense('100')
    }
    const deleteExpenseHandler = () => {
        const expenseItem = document.querySelector(`.expense-${props.id}`);
        if (expenseItem) {
            expenseItem.parentNode.removeChild(expenseItem);
            console.log('delete');
        } else {
            console.log(`Element with ID expense not found.`);
        }
    }
    const [filteredYear, setFilteredYear] = useState ('2020')
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear)
    }
    return (
        <Card className="expense">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseDate date = {props.date}/>
            <ExpenseDetails 
            amount={amount} 
            location={props.location}   
            title={title}
             /> <button onClick={ExpenseHandler}>change expense</button>
             <button onClick={clickHandler}>Change Title</button>
             <button onClick={deleteExpenseHandler}>Delete Expense</button>
        </Card>
    );
};
export default ExpenseItems;