import React from "react";
import ExpenseDetails from './ExpenseDetails'
import './ExpenseList.css'
const ExpenseList = props =>{
        
        if(props.expense.length===0){
            return (
              <h2 className="expenses-list">No expenses found.</h2>
            )
            
        }
        return (
            props.expense.map((expense) => (
                <ExpenseDetails
                className ='expenses-list__fallback'
                    key = {expense.id}
                    amount={expense.amount}
                    location={expense.location}
                    title={expense.title}
                    date = {expense.date}
                    
                />
            ))
        )
    }

export default ExpenseList;