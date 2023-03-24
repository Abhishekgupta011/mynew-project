import ExpenseDetails from './ExpenseDetails'
import ExpenseDate from './ExpenseDate';
import './Expenseitems.css';
function Expenseitems(props){

    return (
        <div className="expense">
            <ExpenseDate date = {props.date}/>
            <ExpenseDetails 
            amount={props.amount} 
            location={props.location}   
            title={props.title} />
        </div>
    )
}
export default Expenseitems;