import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		date: new Date(2020, 10, 1),
		title: "car bill",
		amount: 223.6,
	},
	{
		id: "e2",
		date: new Date(2021, 9, 1),
		title: "car bill2",
		amount: 2223.6,
	},
	{
		id: "e3",
		date: new Date(2022, 8, 1),
		title: "car bill3",
		amount: 203.6,
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};
	const deleteHandler = (id) => {
		setExpenses((prevExpenses) => {
			return prevExpenses.filter((expense) => expense.id != id);
		});
	};

	return (
		<div>
			<NewExpense addExpense={addExpenseHandler} />
			<Expenses onDelete={deleteHandler} items={expenses}></Expenses>
		</div>
	);
};

export default App;
