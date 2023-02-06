import React from 'react'
import s from './statisticalCards.module.css'
import { Card } from "./card";

import Clock from 'assets/img/StatisticalCards/color/alarm-clock.svg'
import PauseClock from 'assets/img/StatisticalCards/color/alarm-clock-pause.svg'
import StopClock from 'assets/img/StatisticalCards/color/alarm-clock-stop.svg'

import DefaultClock from 'assets/img/StatisticalCards/default/alarm-clock.svg'
import DefaultPauseClock from 'assets/img/StatisticalCards/default/alarm-clock-pause.svg'
import DefaultStopClock from 'assets/img/StatisticalCards/default/alarm-clock-stop.svg'

export function StatisticalCards() {
  const isDay = true;
  const cardData = [
    {
      title: 'Фокус',
      value: '35%',
      color: '#FFDDA9',
      icon: <img src={isDay ? Clock : DefaultClock} alt=''/>
    },
    {
      title: 'Время на паузе',
      value: '9м',
      color: '#DFDCFE',
      icon: <img src={isDay ? PauseClock : DefaultPauseClock} alt=''/>
    },
    {
      title: 'Остановки',
      value: '3',
      color: '#C5F1FF',
      icon: <img src={isDay ? StopClock : DefaultStopClock} alt=''/>
    },
  ]
  return (
    <div className={s.main_wrap}>
      {cardData.map((it) => {
        return (<Card key={it.title} title={it.title} value={it.value} icon={it.icon} color={isDay ? it.color : '#f4f4f4'} />)
      })}
    </div>
  )
}
