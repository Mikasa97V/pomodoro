import React, {useEffect, useState} from 'react'
import s from './home.module.css'
import { Rules } from '../../components/rules'
import { TaskForm } from '../../components/Forms/task-form'
import { TaskList } from '../../components/taskList'
// import Counter from '../../components/counter/Counter'
import { Timer } from '../../components/timer'
import {useLocation} from "react-router-dom";
import {ConfirmModal} from "../../components/confirmModal";

export const Home: React.FC = () => {
  const [isConfirmDelete, setIsConfirmDelete] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsConfirmDelete(location.pathname.includes('/settings/delete'))
  }, [location])

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
      {isConfirmDelete && (
        <ConfirmModal/>
      )}
    </div>
  )
}
