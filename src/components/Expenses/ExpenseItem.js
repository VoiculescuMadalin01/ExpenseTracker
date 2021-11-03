import React from "react";
import Card from "./../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	const deleteExpense = () => {
		props.onDelete(props.id);
	};
	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2>{props.title}</h2>
					<div className="expense-item__price">${props.amount}</div>
					<button
						className="expense-item__delete"
						onClick={deleteExpense}
					>
						Delete
					</button>
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;
