import React from 'react';
import s from "./Buttons.module.css"
import {OneButton} from "./OneButton/OneButton";

export type ButtonsPropsType = {
    counterValue: number
    incOnClick: () => void
    resetOnClick: () => void
    maxCount: 5
    minCount: 0

}

export const Buttons = (props: ButtonsPropsType) => {

    return (
        <div className={s.btnWrapper}>
            <OneButton buttonTitle={"inc"}
                       buttonClick={props.incOnClick}
                       disabled={props.maxCount === props.counterValue}/>
            <OneButton disabled={props.minCount === props.counterValue}
                       buttonTitle={"reset"}
                       buttonClick={props.resetOnClick}/>
        </div>
    )
}


