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

    let scoreBoardText = props.startValue === props.startValueSetting && props.maxValue === props.maxValueSetting
        ? props.counterValue
        : "enter values and press \"set\""
    if ( props.maxValue <= props.startValue || props.startValue < 0 ) {
        scoreBoardText = "Incorrect value!"
        classForNumber = s.messageStyleError
    }

    return (
        <div className={s.windowWithNumber}>
            <span className={classForNumber}>
                {scoreBoardText}
            </span>
        </div>
        )
}

// 1. В спане нам нужно показывать либо цифру, либо текст "enter values and press \"set\""
// либо текст "Incorrect value!" В зависимости от условий, которые мы можем взять из
// input, когда мы их подкрашивали красным
//
//
//
//

