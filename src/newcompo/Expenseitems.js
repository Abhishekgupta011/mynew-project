import './Expenseitems.css';
function Expenseitems(props){
    
    return (
        <div className="expense">
            <div>{props.date.toISOString()}</div>
            <div className="expense_description">
                <h2>{props.title}</h2>
                <div className="expenseitem_location">{props.location}</div>
                <div className="expenseitem_price">${props.amount}</div>
            </div>
        </div>
    )
}
export default Expenseitems;