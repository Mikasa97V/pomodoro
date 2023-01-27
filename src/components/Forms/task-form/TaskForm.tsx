import React, { useState} from 'react'
import s from './taskForm.module.css'
import root from '../../../index.module.css'
import {useDispatch} from "react-redux"
import { addNewTask } from "../../../features/tasks/actionTypes"
import { TData } from "./taskFormType";
const { v1: uniqueId } = require('uuid')


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
        onClick={addTask}
        className={`${s.button} ${root.button} ${root.primary_button}`}>
        Добавить
      </button>
    </form>
  )
}
