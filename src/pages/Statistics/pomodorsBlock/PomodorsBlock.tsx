import React from 'react'
import s from './pomodorsBlock.module.css'
import SimpleTomato from 'assets/img/Simple-tomato.svg'
import TomatoFace from 'assets/img/TomatoFace.svg'
import {useTotalWorksDone} from "../../../features/statistics/selectors";

export function PomodorsBlock() {
  const tomato = 1;
  const totalWorksDone = useTotalWorksDone()
  return (
    <div className={s.main_wrap}>
      {tomato ? (<>
          <div className={s.num_tomato_img}>
            <img src={SimpleTomato} alt="tomato"/>
            <span className={s.num_tomato_img_text}>x {totalWorksDone-1}</span>
          </div>
          <div className={s.num_tomato}>{totalWorksDone-1} помидора</div>
        </>
      ) : (
        <div className={s.tomato_face}>
          <img src={TomatoFace} alt='Tomato' />
        </div>
      )}
    </div>
  )
}
