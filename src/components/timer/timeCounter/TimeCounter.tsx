import React, {useContext, useState} from 'react'
import s from './timeCounter.module.css'
import { TimerButtons } from './timerButtons'
import { getPadTime } from '../../../helpers/getPadTime'
import { IProps } from "./timeCounterType";
import {TimerContext} from "../../../providers/timer/TimerProvider";
import IncreaseTime from '../../../assets/img/Increase-time.svg';

export const workTime = 3 // 25 * 60
export const shortRestTime = 5 // 5 * 60
export const longRestTime = 30 * 60 // 5 * 60

export function TimeCounter({
    taskText,
    greenButtonType,
    setGreenButtonType,
    isWorkTime,
    setIsWorkTime,
    numberOfWorks,
    setNumberOfWorks,
}: IProps) {
  const {seconds: totalSeconds, increaseTime} = useContext(TimerContext)

  const minutes = getPadTime(Math.floor(totalSeconds / 60))
  const seconds = getPadTime(totalSeconds - minutes * 60)

  const [greenButton, setGreenButton] = useState('Старт')
  const [redButton, setRedButton] = useState('Стоп')
  const [redButtonType, setRedButtonType] = useState('stop')

  const data = {
    greenButton,
    setGreenButton,
    greenButtonType,
    setGreenButtonType,
    redButton,
    setRedButton,
    redButtonType,
    setRedButtonType,
    isWorkTime,
    setIsWorkTime,
    numberOfWorks,
    setNumberOfWorks,
  }

  let timerColor
  if (greenButtonType === 'start' || greenButtonType === 'continue') {
    timerColor = s.timer_black
  } else {
    if (isWorkTime) {
      timerColor = s.timer_red
    } else {
      timerColor = s.timer_green
    }
  }

  return (
    <div className={s.main_wrap}>
      <div className={`${s.timer} ${timerColor}`}>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
        <button className={s.increase_time_wrap} onClick={increaseTime}>
          <img src={IncreaseTime} alt="Add time"/>
        </button>
      </div>
      <div className={s.task_name_wrap}>
        <span className={s.task_number}>Задача 1 - </span>
        <span className={s.task_text}>{taskText || ''}</span>
      </div>
      <TimerButtons data={data}/>
    </div>
  )
}
