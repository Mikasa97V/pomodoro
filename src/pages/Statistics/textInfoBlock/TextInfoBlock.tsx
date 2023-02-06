import React from 'react'
import s from './TextInfoBlock.module.css'

export function TextInfoBlock() {
  const isData = true
  return (
    <div className={s.text_info_block}>
      <h3 className={s.week_day}>Понедельник</h3>
      {isData ? (
        <span className={s.text}>
        Вы работали над задачами в течение <span className={s.text_time}> 51 минуты</span>
      </span>
      ) : (
        <span className={s.text}>
        Нет данных
      </span>
      )}

    </div>
  )
}
