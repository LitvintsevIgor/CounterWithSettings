import React from 'react';
import s from "./Buttons.module.css"
import {OneButton} from "./OneButton/OneButton";

export type ButtonsPropsType = {
    counterValue: number
    incOnClick: () => void
    resetOnClick: () => void
    maxValue: number
    startValue: number

}

export const Buttons = (props: ButtonsPropsType) => {

    return (
        <div className={s.btnWrapper}>
            <OneButton buttonTitle={"inc"}
                       buttonClick={props.incOnClick}
                       disabled={props.maxValue === props.counterValue}/>
            <OneButton disabled={props.startValue === props.counterValue}
                       buttonTitle={"reset"}
                       buttonClick={props.resetOnClick}/>
        </div>
    )
}


