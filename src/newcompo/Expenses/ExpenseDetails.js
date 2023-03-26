const ExpenseDetails = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <div>${props.amount}</div>
            <div>{props.location}</div>
        </div>
    );
}

export default ExpenseDetails;
