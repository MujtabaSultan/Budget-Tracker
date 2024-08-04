// src/App.jsx
import './App.css';

const App = () => {
  const expenses = [
    { name: 'electricity', overBudget: true },
    { name: 'gym membership', overBudget: false },
    { name: 'car down payment', overBudget: true },
  ];

  return (
    <>
      <h1>expenses List</h1>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index} className={expense.overBudget ? 'completed' : 'not-completed'}>
            {`${expense.name} : ${expense.overBudget?"over budget":"in budget"}`}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;