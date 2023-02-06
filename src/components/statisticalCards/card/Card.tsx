import React from 'react'
import s from './card.module.css'
import {IProps} from "./cardType";

export function Card({title, value, icon, color}: IProps) {
  return (
    <div className={s.main_wrap} style={{background: color}}>
      <div className={s.statistics}>
        <h4 className={s.title}>{title}</h4>
        <div className={s.data}>{value}</div>
      </div>
      <div className={s.icon}>{icon}</div>
    </div>
  )
}
