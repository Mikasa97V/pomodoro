import React, { useContext, useEffect, useMemo, useState } from 'react'
import s from './header.module.css'
import { IProps } from './headerType'
import { TimerContext } from '../../../providers/timer/TimerProvider'
import { conversion } from '../../../helpers/conversion'

export function Header({ taskName, tomato }: IProps) {
  const { isWorkTime } = useContext(TimerContext)
  const [tomatoText, setTomatoText] = useState('')
  const declension = ['Помидор', 'Помидора', 'Помидоров']

  const headerColor = useMemo(() => {
    if (isWorkTime === null) return s.main_wrap_grey
    if (isWorkTime) return s.main_wrap_red
    if (!isWorkTime) return s.main_wrap_green
  }, [isWorkTime])

  useEffect(() => {
    if (!tomato) return
    setTomatoText(conversion(tomato, declension) + ' ' + tomato)
  }, [tomato])

  return (
    <div className={`${s.main_wrap} ${headerColor}`}>
      <div className={s.task_text}>
        {taskName || 'Выберите задачу из списка'}
      </div>
      <div className={s.count}>{tomatoText}</div>
    </div>
  )
}
