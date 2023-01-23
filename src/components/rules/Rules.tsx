import React from 'react'
import s from './rules.module.css'

export function Rules() {
  return (
    <div className={s.main_list_wrap}>
      <h1 className={s.list_title}>Ура! Теперь можно начать работать:</h1>
      <ul className={s.rules_list}>
        <li className={s.rule}>
          <span className={s.rule_text}>
            Выберите категорию и напишите название текущей задачи
          </span>
        </li>
        <li className={s.rule}>
          <span className={s.rule_text}>Запустите таймер («помидор»)</span>
        </li>
        <li className={s.rule}>
          <span className={s.rule_text}>
            Работайте пока «помидор» не прозвонит
          </span>
        </li>
        <li className={s.rule}>
          <span className={s.rule_text}>
            Сделайте короткий перерыв (3-5 минут)
          </span>
        </li>
        <li className={s.rule}>
          <span className={s.rule_text}>
            Продолжайте работать «помидор» за «помидором», пока задача не будут
            выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30
            минут).
          </span>
        </li>
      </ul>
    </div>
  )
}
