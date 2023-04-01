import ExpenseDetails from './ExpenseDetails'
import ExpenseDate from './ExpenseDate';
import './Expenseitems.css';
import Card from '../../UI/Card.js'
const ExpenseItems = (props) =>{
    const clickHandler = ()=>{
        console.log('clicked')
    }
    const deleteExpenseHandler = () => {
        const expenseItem = document.querySelector(`.expense`);
        if (expenseItem) {
            expenseItem.parentNode.removeChild(expenseItem);
            console.log('delete');
        } else {
            console.log(`Element with ID expense not found.`);
        }
    }
    return (
        <Card className="expense">
            <ExpenseDate date = {props.date}/>
            <ExpenseDetails 
            amount={props.amount} 
            location={props.location}   
            title={props.title}
             />
             <button onClick={clickHandler}>Change Title</button>
             <button onClick={deleteExpenseHandler}>Delete Expense</button>
        </Card>
    );
};
export default ExpenseItems;