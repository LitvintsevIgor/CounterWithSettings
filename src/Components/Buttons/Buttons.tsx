import React from 'react';
import s from "./Buttons.module.css"
import {OneButton} from "./OneButton/OneButton";

export type ButtonsPropsType = {
    counterValue: number
    incOnClick: () => void
    resetOnClick: () => void
    maxValue: number
    startValue: number
    startValueSetting: number
    maxValueSetting: number
}


export const Buttons = (props: ButtonsPropsType) => {

    let incDisableValue = false;
    let resetDisableValue = false;
    if (props.maxValue === props.counterValue || props.startValue < 0) {
        incDisableValue = true;
    }
    if (props.maxValue <= props.startValue) {
        incDisableValue = true;
        resetDisableValue = true;
    }
    if (props.startValue !== props.startValueSetting || props.maxValue !== props.maxValueSetting) {
        incDisableValue = true;
        resetDisableValue = true;
    }

    if (props.startValue === props.counterValue || props.startValue < 0) {
        resetDisableValue = true;
    }


    return (
        <div className={s.btnWrapper}>
            <OneButton buttonTitle={"inc"}
                       buttonClick={props.incOnClick}
                       disabled={incDisableValue}/>
            <OneButton disabled={resetDisableValue}
                // disabled={props.startValue === props.counterValue}
                       buttonTitle={"reset"}
                       buttonClick={props.resetOnClick}/>
        </div>
    )
}


