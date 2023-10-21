import ExpenseItem from './Expenseltem';
import Card from '../UI/Card';

function Expenses(props) {
  return (
    <Card className="expenses">
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
  );
}

export default Expenses;
