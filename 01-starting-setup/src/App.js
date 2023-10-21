import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2020, 2, 28) },
    { title: 'Toilet Paper', amount: 304.67, date: new Date(2021, 1, 2) },
    { title: 'new TV', amount: 314.67, date: new Date(2022, 7, 16) },
    { title: 'Airplane', amount: 324.67, date: new Date(2023, 12, 9) },
  ];
  return <Expenses expenses={expenses} />;
}

export default App;
