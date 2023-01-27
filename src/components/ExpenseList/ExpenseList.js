import React from "react";
import ExpenseListItem from "./ExpenseListItem";

export default function ExpenseList(props) {
  const expenses = props.expenses.map(expense => {
    return (
      <ExpenseListItem
      // all of these will be updated
        key={expense.id}
        currency={expense.currency}
        cost={expense.cost}
        when={expense.when}
        category={expense.category}
        notes={expense.notes}
        />)
  })

  return <ul>
    {expenses}
  </ul>
}