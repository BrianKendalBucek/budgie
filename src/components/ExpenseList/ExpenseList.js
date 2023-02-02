import React from "react";
import ExpenseListItem from "./ExpenseListItem";
import './ExpenseList.scss';

export default function ExpenseList(props) {
  const expenses = props.expenses.map(expense => {
    return (
      <ExpenseListItem
      // all of these will be updated
        // key={expense.id}
        // currency={expense.currency}
        // price={expense.price}
        // category={expense.category}
        // notes={expense.notes}
        // when={expense.when}
        />)
  })

  return <ul>
    {expenses}
  </ul>
}