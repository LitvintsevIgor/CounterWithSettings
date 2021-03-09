import s from "../CounterSettingsWindow/CounterSettingsWindow.module.css";
import React, {ChangeEvent} from "react";

export type CounterSettingsWindowPropsType = {
    startValue: number
    maxValue: number
    maxValueSetting: number
    startValueSetting: number
    changeStartValueInInput: (e: ChangeEvent<HTMLInputElement>) => void
    changeMaxValueInInput: (e: ChangeEvent<HTMLInputElement>) => void
    setSettingsCallback: () => void
}

export const CounterSettingsWindow = (props: CounterSettingsWindowPropsType) => {

    let disabledValue = props.startValue === props.startValueSetting
        && props.maxValue === props.maxValueSetting;
    if (props.startValue < 0) {
        disabledValue = true;
    }

    return (
        <div className={s.counterWrapper}>
            <div className={s.windowWithSettings}>
                <div className={s.setValue}>
                    <div>
                        max value:
                    </div>
                    <input className={s.inputClass}
                           type={"number"}
                           value={props.maxValue}
                           onChange={props.changeMaxValueInInput}/>
                </div>
                <div className={s.setValue}>
                    <div>
                        start value:
                    </div>
                    <input className={s.inputClass}
                           type="number"
                           value={props.startValue}
                           onChange={props.changeStartValueInInput}
                    />
                </div>
            </div>
            <div className={s.btnWrapper}>
                <button className={s.btn}
                        onClick={props.setSettingsCallback}
                        disabled={disabledValue}
                >set</button>
            </div>
        </div>
    )
}
// 1. У нас есть кнопка set и она по умолчанию должна быть задизэйблина, и раздизэйбливаться она
// должна тогда, когда startValue и maxValue не равны startValueSetting и maxValueSetting
// Сделали
// 2. От такого же условия должно зависеть и то, что выводится на экране, то есть если
// startValue и maxValue не равны startValueSetting и maxValueSetting то нужно показать
// текст enter values and press "set"
// Сделали
// 3. Кнопка set еще должна дизэйблится когда у нас startValue меньше 0
//
//