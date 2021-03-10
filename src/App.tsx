import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {CounterSettingsWindow} from "./Components/CounterSettingsWindow/CounterSettingsWindow";


function App() {

    let [counterValue, setCounterValue] = useState(0);
    const [startValue, setStartValue] = useState<number> (0)
    const [maxValue, setMaxValue] = useState<number> (5)

    const [startValueSetting, setStartValueSetting] = useState<number> (0)
    const [maxValueSetting, setMaxValueSetting] = useState<number> (5)


    // Нижние 2е функции просто записывают в стэйт (startValue, maxValue) изменения
    // записывают их пока что только в инпуты и никуда не передают
    const changeStartValueInInput = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(parseInt(e.currentTarget.value))
    }
    const changeMaxValueInInput = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(parseInt(e.currentTarget.value))
    }

    // Эта функция должна срабатывать при нажатии на кнопку "set", и только после нажатия
    // значения из инпутов должны передаться в правый счетчик, и от этих значанией должны
    // зависеть дизэйблы кнопок и стиль числа (красное или нет)
    const setSettingsCallback = () => {
        setCounterValue(startValue)
        setStartValueSetting(startValue)
        setMaxValueSetting(maxValue)
    }

    // Эта функция срабатывает при нажатии на inc и она добавляет к тому, что сейчас есть
    // на экране 1 и больше ничего
    const incOnClick = () => {setCounterValue(counterValue += 1)};
    // Эта функция срабатывает при нажатии на reset и по идее должна сбрасывать число на экране до того,
    const resetOnClick = () => {setCounterValue(startValueSetting)};



    useEffect( () => {
        let startValueAsString = localStorage.getItem("startValue");
        if (startValueAsString) {
            let newStartValueAsString = JSON.parse(startValueAsString);
            setStartValue(newStartValueAsString)
        }
    }, [] )

    useEffect( () => {
        let maxValueAsString = localStorage.getItem("maxValue");
        if (maxValueAsString) {
            let newMaxValueAsString = JSON.parse(maxValueAsString);
            setMaxValue(newMaxValueAsString)
        }
    }, [] )


    useEffect( () => {
        let startValueSettingAsString = localStorage.getItem("startValueSetting");
        if (startValueSettingAsString) {
            let newStartValueSettingAsString = JSON.parse(startValueSettingAsString);
            setStartValueSetting(newStartValueSettingAsString)
            setCounterValue(counterValue)
        }
    }, [] )

    useEffect( () => {
        let maxValueSettingAsString = localStorage.getItem("maxValueSetting");
        if (maxValueSettingAsString) {
            let newMaxValueSettingAsString = JSON.parse(maxValueSettingAsString);
            setMaxValueSetting(newMaxValueSettingAsString)

        }
    }, [] )

    useEffect( () => {
        let counterValueAsString = localStorage.getItem("counterValue");
        if (counterValueAsString) {
            let newСounterValueAsString = JSON.parse(counterValueAsString);
            setCounterValue(newСounterValueAsString)
        }
    }, [] )




    useEffect( () => {
        localStorage.setItem("startValue", JSON.stringify(startValue))
    }, [startValue] )

    useEffect( () => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }, [maxValue] )


    useEffect( () => {
        localStorage.setItem("startValueSetting", JSON.stringify(startValueSetting))
    }, [startValueSetting] )

    useEffect( () => {
        localStorage.setItem("maxValueSetting", JSON.stringify(maxValueSetting))
    }, [maxValueSetting] )

    useEffect( () => {
        localStorage.setItem("counterValue", JSON.stringify(counterValue))
    }, [counterValue] )


  return (
    <div className="App">
        <CounterSettingsWindow maxValueSetting={maxValueSetting}
                               startValueSetting={startValueSetting}
                               startValue={startValue}
                               maxValue={maxValue}
                               changeStartValueInInput={changeStartValueInInput}
                               changeMaxValueInInput={changeMaxValueInInput}
                               setSettingsCallback={setSettingsCallback}
        />
        <Counter counterValue={counterValue}
                 maxValueSetting={maxValueSetting}
                 startValueSetting={startValueSetting}
                 incOnClick={incOnClick}
                 resetOnClick={resetOnClick}
                 maxValue={maxValue}
                 startValue={startValue}
        />
    </div>
  );
}

export default App;

