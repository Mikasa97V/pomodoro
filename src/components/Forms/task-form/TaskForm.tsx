import React, {useEffect, useState} from 'react'
import s from './taskForm.module.css'
import root from 'index.module.css'

import {useDispatch} from "react-redux"
import {addNewTask} from "../../../features/tasks/actionTypes"
import {TData} from "./taskFormType";

const {v1: uniqueId} = require('uuid')


export function TaskForm() {
  const [value, setValue] = useState('')
  const [isNotification, setIsNotification] = useState(false)
  const dispatch = useDispatch();
  const notificationClass = isNotification ? `${root.main_wrap_notification_visible}` : `${root.main_wrap_notification_hidden}`


  const data: TData = {
    id: uniqueId(),
    pomodors: 1,
    workTime: 25,
    taskNumber: 1,
    name: value,
    tomato: 0,
  }

  const addTask = () => {
    if (value.length > 0) {
      dispatch(addNewTask(data))
      setValue('');
    } else {
      setIsNotification(true)
    }
  }

  const handleKeyDown = (event: { key: string; preventDefault: () => void }) => {
    if (event.key != 'Enter') return
    event.preventDefault()
    addTask()
  };

  useEffect(() => {
    if (!isNotification) return
    const timerId = setTimeout(() => {
      setIsNotification(false)
      clearTimeout(timerId)
    }, 3000)

  }, [isNotification])

  const onChangeInput = (e: { target: { value: React.SetStateAction<string> } }) => {
    setValue(e.target.value)
    setIsNotification(false)
  }

  return (
    <form className={s.main_wrap}>
      <label className={s.label}>
        <input
          className={s.input}
          placeholder="Название задачи"
          value={value}
          onChange={onChangeInput}
          onKeyDown={handleKeyDown}
        />
      </label>
      <button
        type="button"
        onClick={addTask}
        className={`${s.button} ${root.button} ${root.primary_button}`}>
        Добавить
      </button>
      <div
        className={`${root.main_wrap_notification} ${notificationClass}`}
      >Введите название задачи в поле
      </div>
    </form>
  )
}
