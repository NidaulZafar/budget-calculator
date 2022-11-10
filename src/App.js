import './App.css';
import React, {useState} from 'react';
import ExpenseList  from './components/ExpenseList';
import ExpenseForm  from './components/ExpenseForm';
import Alert from './components/Alert';
import {v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  {id: uuidv4(),charge: "rent",amount: 1600},
  {id: uuidv4(),charge: "car",amount: 400},
  {id: uuidv4(),charge: "Credit card bill",amount: 1200}
];

function App() {
  // *****state values
  //  all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  //  single expense
  const [charge, setCharge] = useState('');
  //  single amount
  const [amount, setAmount] = useState('');

  //  alert
  const [alert, setAlert] = useState({show: false})

  // ***** functionality
  const handleCharge = e => {
    setCharge(e.target.value)
  }
  const handleAmount = e => {
    setAmount(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      const singleExpense = { id: uuidv4(), charge, amount }
      setExpenses([...expenses, singleExpense]);
      setCharge('');
      setAmount('');

    }
    else {
      // handle alert
    }
  }

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>Budget Calculator</h1>
      <main className='App'>
        <ExpenseForm charge={charge} amount={amount} handleAmount={handleAmount} handleCharge= {handleCharge} handleSubmit={handleSubmit} />
      <ExpenseList expenses={expenses} />        
      </main>
      <h1>Total Spending: <span className='total'>
        ${expenses.reduce((acc, curr) => {
          return (acc += parseInt(curr.amount));
        },0)}
      </span></h1>
    </>
  );
}

export default App;
