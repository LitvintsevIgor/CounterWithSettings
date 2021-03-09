import React from 'react';
import s from "./ScoreBoard.module.css"


export type ScoreboardPropsType = {
    counterValue: number
}

export const ScoreBoard = (props:ScoreboardPropsType) => {

    let classForNumber = props.counterValue === 5 ? s.endNumber : ""

    return (
        <div className={s.windowWithNumber}>
            <span className={classForNumber}>{props.counterValue}</span>
        </div>
        )
}