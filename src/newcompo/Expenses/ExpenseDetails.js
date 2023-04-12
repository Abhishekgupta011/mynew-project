import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../../UI/Card";
const ExpenseDetails = (props) => {
    return (
        <Card>
            <ExpenseDate date={props.date} />
            <div>
            <h2>{props.title}</h2>
            <div>${props.amount}</div>
            <div>{props.location}</div>
            </div>
        </Card>
    );
}

export default ExpenseDetails;
