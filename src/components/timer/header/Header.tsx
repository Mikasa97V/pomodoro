import React, {useContext, useMemo} from 'react'
import s from './header.module.css'
import { IProps } from "./headerType";
import {TimerContext} from "../../../providers/timer/TimerProvider";

export function Header({taskName, tomato }: IProps) {
  const {isWorkTime} = useContext(TimerContext)

  const headerColor = useMemo(() => {
    if (isWorkTime === null) return s.main_wrap_grey
    if (isWorkTime) return s.main_wrap_red
    if (!isWorkTime) return s.main_wrap_green
  }, [isWorkTime])

  return (
    <div className={`${s.main_wrap} ${headerColor}`}>
      <div className={s.task_text}>{taskName || 'Выберите задачу из списка'}</div>
      <div className={s.count}>{taskName ? `Помидор ${tomato}` : ''}</div>
    </div>
  )
}
