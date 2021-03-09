import React from 'react';
import s from "./ScoreBoard.module.css"


export type ScoreboardPropsType = {
    counterValue: number
    maxValue: number
    startValue: number
}

export const ScoreBoard = (props:ScoreboardPropsType) => {

    let classForNumber = props.counterValue === props.maxValue ? s.endNumber : ""

    return (
        <div className={s.windowWithNumber}>
            <span className={classForNumber}>{props.counterValue}</span>
        </div>
        )
}