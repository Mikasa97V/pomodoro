import React from 'react'
import './style.css'
import { Rules } from '../../components/rules'
import { TaskForm } from '../../components/Forms/task-form'
// import Counter from '../../components/counter/Counter'

export const Home: React.FC = () => {
  return (
    <div className="main-wrap">
      <div className="left-wrap">
        <Rules />
        <TaskForm />
      </div>
      <div className="right-wrap">right-wrap</div>
      {/*<Counter />*/}
    </div>
  )
}
