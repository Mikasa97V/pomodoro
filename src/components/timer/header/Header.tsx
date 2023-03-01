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

  const conversion = () => {
    const declension = ['помидор', 'помидора', 'помидоров'];
    const cases = [2, 0, 1, 1, 1, 2];
    return declension[ (tomato%100>4 && tomato%100<20)? 2 : cases[(tomato%10<5)?tomato%10:5] ];
  }


  return (
    <div className={`${s.main_wrap} ${headerColor}`}>
      <div className={s.task_text}>{taskName || 'Выберите задачу из списка'}</div>
      <div className={s.count}>{tomato ? `Помидор ${tomato}` : ''}</div>
    </div>
  )
}
