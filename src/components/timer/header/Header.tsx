import React from 'react'
import s from './header.module.css'
import { IProps } from "./headerType";

export function Header({ greenButtonType, isWorkTime, taskName }: IProps) {
  let headerColor
  if (greenButtonType === 'start') {
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
      <div className={s.count}>Помидор 1</div>
    </div>
  )
}
