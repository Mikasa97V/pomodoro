import React, { useState } from 'react'
import s from './taskForm.module.css'
import root from '../../../index.module.css'
// import { useDispatch } from 'react-redux'
// import { actionTypes } from '../../../features/tasks'

export function TaskForm() {
  const [value, setValue] = useState('')
  // const dispatch = useDispatch();

  const addNewTask = () => {
    // dispatch({type: actionTypes.UPDATE_TASK})
  }

  return (
    <form className={s.main_wrap}>
      <label className={s.label}>
        <input
          className={s.input}
          placeholder="Название задачи"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button
        type="button"
        onClick={addNewTask}
        className={`${s.button} ${root.button} ${root.primary_button}`}>
        Добавить
      </button>
    </form>
  )
}
