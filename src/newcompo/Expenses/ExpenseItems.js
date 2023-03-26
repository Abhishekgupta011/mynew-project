import ExpenseDetails from './ExpenseDetails'
import ExpenseDate from './ExpenseDate';
import './Expenseitems.css';
import Card from '../../UI/Card.js'
const ExpenseItems = (props) =>{

    return (
        <Card className="expense">
            <ExpenseDate date = {props.date}/>
            <ExpenseDetails 
            amount={props.amount} 
            location={props.location}   
            title={props.title}
             />
        </Card>
    );
};
export default ExpenseItems;