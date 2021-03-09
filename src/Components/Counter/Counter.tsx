import React from 'react';
import { Buttons } from '../Buttons/Buttons';
import s from "./Counter.module.css"
import { ScoreBoard } from '../ScoreBoard/ScoreBoard';


export type CounterPropsType = {
    counterValue: number
    incOnClick: () => void
    resetOnClick: () => void
    maxValue: number
    startValue: number
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counterWrapper}>
            <ScoreBoard counterValue={props.counterValue}
                        maxValue={props.maxValue}
                        startValue={props.startValue}
            />
            <Buttons counterValue={props.counterValue}
                     incOnClick={props.incOnClick}
                     resetOnClick={props.resetOnClick}
                     maxValue={props.maxValue}
                     startValue={props.startValue}
            />
        </div>
    )
}