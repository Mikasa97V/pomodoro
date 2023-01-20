import React from 'react'
// import './taskForm.module.css'

const s = require('./taskForm.module.css')

export function TaskForm() {
  return (
    <form className={s.taskFormWrap}>
      <label className='task-form-label'>
        <input
          className='task-form-input'
          placeholder='Название задачи'
        />
      </label>
      <button
        type="submit"
        className='primary-button task-form-button'>
        Добавить
      </button>
    </form>
  );
}
