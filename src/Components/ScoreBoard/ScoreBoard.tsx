import React from 'react';
import s from "./ScoreBoard.module.css"


export type ScoreboardPropsType = {
    counterValue: number
    maxValueSetting: number
    startValueSetting: number
    startValue: number
    maxValue: number
}

export const ScoreBoard = (props:ScoreboardPropsType) => {
    debugger

    // let classForNumber = props.counterValue === props.maxValueSetting ? s.endNumber : ""
    //
    // if (props.startValue === props.startValueSetting && props.maxValue === props.maxValueSetting) {
    //     classForNumber = s.messageStyle
    // }
    let classForNumber;

    if (props.startValue === props.startValueSetting && props.maxValue === props.maxValueSetting) {
        classForNumber = props.counterValue === props.maxValueSetting ? s.endNumber : s.forNumber
    } else {
        classForNumber = s.messageStyle
    }

    return (
        <div className={s.windowWithNumber}>
            <span className={classForNumber}>
                {props.startValue === props.startValueSetting && props.maxValue === props.maxValueSetting
                    ? props.counterValue
                    : "enter values and press \"set\""}
            </span>
        </div>
        )
}


