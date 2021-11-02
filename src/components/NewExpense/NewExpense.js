import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const cancelHandler = () => {
		setIsEditing((prevEditingState) => {
			return !prevEditingState;
		});
	};

	const onSaveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random(),
		};
		props.addExpense(expenseData);
	};
	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={cancelHandler}>Add New Expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					onCancel={cancelHandler}
					onSaveExpenseData={onSaveExpenseDataHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
