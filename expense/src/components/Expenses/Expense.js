import React, { useState } from "react";
import ExpensItem from "./ExpensItem";
import "./Expense.css";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from './ExpenseChar'

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const FilteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <div>
      <Card className="expenses">
       
        <ExpensesFilter
          selected={filteredYear}
          onChngeFilter={filterChangeHandler}
        />
          <ExpenseChart expenses={FilteredExpenses}/>
        <ExpensesList items={FilteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expense;
