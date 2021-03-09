import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {CounterSettingsWindow} from "./Components/CounterSettingsWindow/CounterSettingsWindow";


function App() {



    let [counterValue, setCounterValue] = useState(0);
    const [startValue, setStartValue] = useState<number> (0)
    const [maxValue, setMaxValue] = useState<number> (5)
    const changeStartValueInInput = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(parseInt(e.currentTarget.value))
    }
    const changeMaxValueInInput = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(parseInt(e.currentTarget.value))
    }

    const setSettingsCallback = () => {
        setCounterValue(startValue)

    }
    const incOnClick = () => {setCounterValue(counterValue += 1)};
    const resetOnClick = () => {setCounterValue(startValue)};


  return (
    <div className="App">
        <CounterSettingsWindow maxValue={maxValue}
                               startValue={startValue}
                               changeStartValueInInput={changeStartValueInInput}
                               changeMaxValueInInput={changeMaxValueInInput}
                               setSettingsCallback={setSettingsCallback}
        />
        <Counter counterValue={counterValue}
                 maxValue={maxValue}
                 startValue={startValue}
                 incOnClick={incOnClick}
                 resetOnClick={resetOnClick}
        />
    </div>
  );
}

export default App;

