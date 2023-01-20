import React from 'react'
import './rules.css'

export function Rules() {
  return (
    <div className="main-list-wrap">
      <h1 className="list-title">Ура! Теперь можно начать работать:</h1>
      <ul className="rules-list">
        <li className="rule">
          <span className="rule-text">
            Выберите категорию и напишите название текущей задачи
          </span>
        </li>
        <li className="rule">
          <span className="rule-text">Запустите таймер («помидор»)</span>
        </li>
        <li className="rule">
          <span className="rule-text">
            Работайте пока «помидор» не прозвонит
          </span>
        </li>
        <li className="rule">
          <span className="rule-text">
            Сделайте короткий перерыв (3-5 минут)
          </span>
        </li>
        <li className="rule">
          <span className="rule-text">
            Продолжайте работать «помидор» за «помидором», пока задача не будут
            выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30
            минут).
          </span>
        </li>
      </ul>
    </div>
  )
}
