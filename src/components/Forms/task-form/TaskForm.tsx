import React, {useState} from 'react'
import s from './taskForm.module.css'
import root from '../../../index.module.css'
import {useDispatch} from "react-redux"
import {addNewTask} from "../../../features/tasks/actionTypes"
import {TData} from "./taskFormType";

const {v1: uniqueId} = require('uuid')


export function TaskForm() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch();

  const data: TData = {
    id: uniqueId(),
    pomodors: 1,
    workTime: 25,
    name: value,
  }

  const addTask = () => {
    if (value.length > 0) {
      dispatch(addNewTask(data))
      setValue('');
    } else {
      console.log('error!')
    }
  }

  const handleKeyDown = (event: { key: string; preventDefault: () => void }) => {
    if (event.key != 'Enter') return
    event.preventDefault()
    addTask()
  };


  return (
    <form className={s.main_wrap}>
      <label className={s.label}>
        <input
          className={s.input}
          placeholder="Название задачи"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </label>
      <button
        type="button"
        onClick={addTask}
        className={`${s.button} ${root.button} ${root.primary_button}`}>
        Добавить
      </button>
    </form>
  )
}
