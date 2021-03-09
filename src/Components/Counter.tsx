import React from 'react';
import { Buttons } from './Buttons/Buttons';
import s from "./Counter.module.css"
import { ScoreBoard } from './ScoreBoard/ScoreBoard';


export type CounterPropsType = {
    counterValue: number
    incOnClick: () => void
    resetOnClick: () => void
    maxCount: 5
    minCount: 0
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.counterWrapper}>
            <ScoreBoard counterValue={props.counterValue} />
            <Buttons counterValue={props.counterValue}
                     incOnClick={props.incOnClick}
                     resetOnClick={props.resetOnClick}
                     maxCount={props.maxCount}
                     minCount={props.minCount}
            />
        </div>
    )
}
