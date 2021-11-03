import React, { useState } from "react";
import Card from "./../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
	const [yearFilter, setFilterYear] = useState("all");
	const filterByYearHandler = (year) => {
		setFilterYear(year);
	};
	const filtredExpenses = props.items.filter((expense) => {
		return yearFilter !== "all"
			? expense.date.getFullYear().toString() === yearFilter
			: expense;

		// if (yearFilter !== "all") {
		// 	return expense.date.getFullYear().toString() === yearFilter;
		// } else {
		// 	return expense;
		// }
	});
	const deleteHandler = (id) => {
		props.onDelete(id);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={yearFilter}
					onFilterByYear={filterByYearHandler}
				/>
				<ExpensesChart expenses={filtredExpenses} />
				<ExpensesList
					onDelete={deleteHandler}
					items={filtredExpenses}
				/>
			</Card>
		</div>
	);
};

export default Expenses;
