import React, {useState} from "react";
import './App.scss';
import CounterApp from "./components/counter";
import Balance from "./components/balance";
import {useSelector} from "react-redux";

const App = () => {
  const [counter, setCounter] = useState(0)
  const cashState = useSelector(state => state.cashReducer.cash)

  const handleIncrementCounter = () => {
    setCounter(prev => prev + 1)
  }

  const handleDecrementCounter = () => {
    setCounter(prev => prev - 1)
  }

  return (
    <div className="container">
      <p>With UseState</p>
      <button onClick={handleIncrementCounter}>
        +
      </button>
      {counter}
      <button onClick={handleDecrementCounter}>
        -
      </button>
      <p>------------------------------</p>
      <p>With React-Redux</p>
      <CounterApp />
      <p>------------------------------</p>
      <Balance />
      <p>------------------------------</p>
      balance from balance component - {cashState}
    </div>
  );
}

export default App;
