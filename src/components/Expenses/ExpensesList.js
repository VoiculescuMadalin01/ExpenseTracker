import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
	const deleteHandler = (id) => {
		props.onDelete(id);
	};

	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback"> No expenses found</h2>;
	}

	return (
		<ul className="expenses-list">
			{props.items.map((expense) => (
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
					key={expense.id}
					id={expense.id}
					onDelete={deleteHandler}
				/>
			))}
		</ul>
	);
};
export default ExpensesList;
