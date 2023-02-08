import React, {useEffect, useState} from 'react'
import s from './home.module.css'
import { Rules } from '../../components/rules'
import { TaskForm } from '../../components/Forms/task-form'
import { TaskList } from '../../components/taskList'
// import Counter from '../../components/counter/Counter'
import { Timer } from '../../components/timer'
import {useLocation, useRouteMatch} from "react-router-dom";
import {ConfirmModal} from "../../components/confirmModal";
import {EditModal} from "../../components/editModal";
import {TimerProvider} from "../../providers/timer/TimerProvider";

export const Home: React.FC = () => {
  const [isConfirmDelete, setIsConfirmDelete] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const location = useLocation()
  const idFromPath = useRouteMatch<{ id: string }>("/tasks/:id")?.params.id;

  useEffect(() => {
    setIsConfirmDelete(location.pathname.includes('/settings/delete'))
  }, [location])

  useEffect(() => {
    setIsEditModalOpen(location.pathname.includes('/settings/edit'))
  }, [location])

  return (
    <TimerProvider taskId={idFromPath}>
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
        <ConfirmModal />
      )}
      {isEditModalOpen && (
        <EditModal />
      )}
    </div>
    </TimerProvider>

  )
}
