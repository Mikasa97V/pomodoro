import React, { useEffect, useState } from 'react'
import s from './timeCounter.module.css'
import { TimerButtons } from './timerButtons'
import { getPadTime } from '../../../helpers/getPadTime'
import IncreaseTime from '../../../assets/img/Increase-time.svg'
import { IProps } from "./timeCounterType";

export const workTime = 3 // 25 * 60
export const shortRestTime = 5 // 5 * 60
export const longRestTime = 30 * 60 // 5 * 60

export function TimeCounter({
    taskText,
    isCounting,
    setIsCounting,
    greenButtonType,
    setGreenButtonType,
    isWorkTime,
    setIsWorkTime,
    numberOfWorks,
    setNumberOfWorks,
}: IProps) {

  const [timerLeft, setTimerLeft] = useState(workTime)
  const minutes = getPadTime(Math.floor(timerLeft / 60))
  const seconds = getPadTime(timerLeft - minutes * 60)

  const [greenButton, setGreenButton] = useState('Старт')
  const [redButton, setRedButton] = useState('Стоп')
  const [redButtonType, setRedButtonType] = useState('stop')

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isCounting) {
        setTimerLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
      }
    }, 1000)
    return () => clearInterval(intervalId)
  }, [isCounting])

  const data = {
    setIsCounting,
    greenButton,
    setGreenButton,
    greenButtonType,
    setGreenButtonType,
    redButton,
    setRedButton,
    redButtonType,
    setRedButtonType,
    setTimerLeft,
    timerLeft,
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

  const increaseTime = () => {
    setTimerLeft(timerLeft + 60)
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
