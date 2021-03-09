import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";


function App() {

    let [counterValue, setCounterValue] = useState(0);

    const incOnClick = () => {setCounterValue(counterValue += 1)};
    const resetOnClick = () => {setCounterValue(0)};
    const maxCount = 5;
    const minCount = 0;

  return (
    <div className="App">
        <Counter counterValue={counterValue}
                 maxCount={maxCount}
                 minCount={minCount}
                 incOnClick={incOnClick}
                 resetOnClick={resetOnClick}
        />
    </div>
  );
}

export default App;
