import React, { useEffect, useState } from 'react'
import s from './pomodorsBlock.module.css'
import SimpleTomato from 'assets/img/Simple-tomato.svg'
import TomatoFace from 'assets/img/TomatoFace.svg'
import { useSelector } from 'react-redux'
import { getTomato } from '../../../features/tomatoCount/selectors'
import { conversion } from '../../../helpers/conversion'

export function PomodorsBlock() {
  const tomato = useSelector(getTomato)
  return (
    <div className={s.main_wrap}>
      {tomato ? (
        <>
          <div className={s.num_tomato_img}>
            <img src={SimpleTomato} alt="tomato" />
            <span className={s.num_tomato_img_text}>x {tomato || '0'}</span>
          </div>
          <div className={s.num_tomato}>
            {conversion(tomato, ['помидор', 'помидора', 'помидоров'])}
          </div>
        </>
      ) : (
        <div className={s.tomato_face}>
          <img src={TomatoFace} alt="Tomato" />
        </div>
      )}
    </div>
  )
}
