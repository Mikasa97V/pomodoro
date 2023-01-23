import React from 'react'
import s from './home.module.css'
import { Rules } from '../../components/rules'
import { TaskForm } from '../../components/Forms/task-form'
import { TaskList } from '../../components/taskList'
// import Counter from '../../components/counter/Counter'
import { Timer } from '../../components/timer'

export const Home: React.FC = () => {
  return (
    <div className={s.main_wrap}>
      <div className={s.left_wrap}>
        <Rules />
        <TaskForm />
        <TaskList />
      </div>
      <div className={s.right_wrap}>
        <Timer />
        {/*<Counter />*/}
      </div>
    </div>
  )
}
