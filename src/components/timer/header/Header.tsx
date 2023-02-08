import React, {useContext} from 'react'
import s from './header.module.css'
import { IProps } from "./headerType";
import {TimerContext} from "../../../providers/timer/TimerProvider";

export function Header({taskName }: IProps) {
  const {
    isWorkTime,
    greenButton,
  } = useContext(TimerContext)

  let headerColor
  if (greenButton === 'Старт') {
    headerColor = s.main_wrap_grey
  } else {
    if (isWorkTime) {
      headerColor = s.main_wrap_red
    } else {
      headerColor = s.main_wrap_green
    }
  }
  return (
    <div className={`${s.main_wrap} ${headerColor}`}>
      <div className={s.task_text}>{taskName || 'Выберите задачу из списка'}</div>
      <div className={s.count}>{taskName ? 'Помидор 1' : ''}</div>
    </div>
  )
}
