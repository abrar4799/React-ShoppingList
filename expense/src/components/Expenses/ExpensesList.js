import react from "react";
import ExpensItem from "./ExpensItem";
import './ExpensesList.css'
const ExpensesList = props =>{
    let expenseContent = <p>No Expenses Found</p>;

    if (props.items.length === 0){
        return <h2 className="expenses-list__fallback">No Expenses Found </h2>
    }
  return <ul className="expenses-list">
      {
          props.items.map((expenses) => (
            <ExpensItem
              key={expenses.id}
              title={expenses.title}
              amount={expenses.amount}
              date={expenses.date}
            />
          ))
      }

  </ul> 
   
}

export default ExpensesList; 