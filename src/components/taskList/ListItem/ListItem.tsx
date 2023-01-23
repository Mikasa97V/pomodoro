import React from 'react'
import s from './listItem.module.css'

interface IProps {
  countTime: number,
  name: string,
}

export function ListItem({ countTime, name}: IProps) {
  return (
    <div className={s.main_wrap}>
      <div className={s.task_info_wrap}>
        <div className={s.countTime}>
          <span className={s.countTime_text}>{countTime}</span>
        </div>
        <div className={s.task_text}>{name}</div>
      </div>
      <div className={s.options_button}>
        <div className={s.circle}></div>
        <div className={s.circle}></div>
        <div className={s.circle}></div>
      </div>
    </div>
  )
}
