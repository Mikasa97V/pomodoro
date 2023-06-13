import React, { useContext, useEffect } from 'react'
import s from './timeCounter.module.css'
import { TimerButtons } from './timerButtons'
import { getPadTime } from '../../../helpers/getPadTime'
import { IProps } from './timeCounterType'
import { TimerContext } from '../../../providers/timer/TimerProvider'
import IncreaseTime from '../../../assets/img/Increase-time.svg'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteTask,
  updateTask,
  updateTaskNumber,
} from '../../../features/tasks/actionTypes'
import { getTaskTomatoById } from '../../../features/tasks/selectors'
import { setDeletedTomato } from '../../../features/tomatoCount/actionTypes'

export function TimeCounter({ id, taskText, taskNumber, pomodors }: IProps) {
  let {
    seconds: totalSeconds,
    isWorkTime,
    greenButton,
    increaseTime,
  } = useContext(TimerContext)
  const dispatch = useDispatch()
  const tomato = useSelector(getTaskTomatoById(id))

  totalSeconds = id ? totalSeconds : 0

  const minutes = getPadTime(Math.floor(totalSeconds / 60))
  const seconds = getPadTime(totalSeconds - minutes * 60)
  const isDisabledAddTimeButton = !Boolean(id)

  let timerColor
  if (greenButton === 'Старт' || greenButton === 'Продолжить') {
    timerColor = s.timer_black
  } else {
    if (isWorkTime) {
      timerColor = s.timer_red
    } else {
      timerColor = s.timer_green
    }
  }

  const updateTaskInfo = () => {
    dispatch(updateTask(id, pomodors - 1))
    dispatch(updateTaskNumber(id, taskNumber + 1))
  }

  const deleteTaskHandle = () => {
    dispatch(setDeletedTomato(tomato))
    dispatch(deleteTask(id))
  }

  useEffect(() => {
    if (totalSeconds === 0 && !isWorkTime) updateTaskInfo()
    if (pomodors === 0) deleteTaskHandle()
  }, [totalSeconds])

  return (
    <div className={s.main_wrap}>
      <div className={`${s.timer} ${timerColor}`}>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
        <button
          className={s.increase_time_wrap}
          disabled={isDisabledAddTimeButton}
          onClick={increaseTime}
        >
          <img src={IncreaseTime} alt="Add time" />
        </button>
      </div>
      <div className={s.task_name_wrap}>
        <span className={s.task_number}>
          {taskText ? `Задача ${taskNumber} - ` : ''}
        </span>
        <span className={s.task_text}>{taskText || ''}</span>
      </div>
      <TimerButtons />
    </div>
  )
}
