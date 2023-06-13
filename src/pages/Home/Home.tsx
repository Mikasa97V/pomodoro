import React, { useEffect, useState } from 'react'
import s from './home.module.css'
import { Rules } from '../../components/rules'
import { TaskForm } from '../../components/Forms/task-form'
import { TaskList } from '../../components/taskList'
import { Timer } from '../../components/timer'
import { useLocation } from 'react-router-dom'
import { ConfirmModal } from '../../components/confirmModal'
import { EditModal } from '../../components/editModal'

export const Home: React.FC = () => {
  const [isConfirmDelete, setIsConfirmDelete] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsConfirmDelete(location.pathname.includes('/settings/delete'))
  }, [location])

  useEffect(() => {
    setIsEditModalOpen(location.pathname.includes('/settings/edit'))
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
      </div>
      {isConfirmDelete && <ConfirmModal />}
      {isEditModalOpen && <EditModal />}
    </div>
  )
}
