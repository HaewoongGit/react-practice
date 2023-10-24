import ExpenseItem from './Expenseltem';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const saveExpensesHandler = (year) => {
    const newExpenses = props.expenses.filter(
      (expense) => String(expense.date.getFullYear()) === year
    );

    props.onFilterExpenses(newExpenses);
  };

  return (
    <div>
      <ExpensesFilter onFilterExpenses={saveExpensesHandler} />
      <Card className='expenses'>
        <h2>Let's get started!</h2>
        {props.expenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
