import React, { useState } from "react";
import "./ExpenseForm";

const ExpenseForm = (props) => {
  const [enteredTitle , setEnteredTitle ] = useState('');
  const [enteredAmount , setEnteredAmount ] = useState('');
  const [enteredDate , setEnteredDate ] = useState('');
//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });
  const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
    // setUserInput(

    // //{
    // //   ...userInput,
    // //   enteredTitle: event.target.value,
    // // }
    // );
  };

  const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const submitHandler = (event) =>{
      event.preventDefault();
      const expenseDate = {
          title: enteredTitle , 
          amount : enteredAmount , 
          date : new Date (enteredDate)
      }
      console.log(expenseDate);
      props.onSaveExpenseDate(expenseDate);
      setEnteredTitle('');
      setEnteredAmount ('');
      setEnteredDate('');
      
  }
  /**value attribute in input element & setEnteredTitle ('') make input = null after submit. */

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls  ">
          <label className="new-expense__control label">Title: </label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}  className="new-expense__control input"/>
          
        </div>
        <div className="new-expense__controls ">
          <label>Amount: </label>
          <input
            type="number"
            min="0.01"
            max="10"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls ">
          <label>Date </label>
          <input
            type="date"
            min="2019-1-1"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit"> Add Expense </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
