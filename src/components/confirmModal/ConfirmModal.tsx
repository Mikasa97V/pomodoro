import React, {useEffect, useRef} from 'react'
import s from './confirmModal.module.css'
import root from 'index.module.css'
import ReactDOM from "react-dom"
import {useHistory, useRouteMatch} from "react-router-dom"
import Cancel from '../../assets/img/Cancel.svg'
import {deleteTask} from "../../features/tasks/actionTypes";
import {useDispatch, useSelector} from "react-redux";
import {getTaskList} from "../../features/tasks/selectors";
import {TData} from "../Forms/task-form/taskFormType";

export function ConfirmModal() {
  const id = useRouteMatch<{ id: string }>("/tasks/:id")?.params.id
  const ref = useRef<HTMLDivElement>(null)
  const history = useHistory()
  const dispatch = useDispatch()
  const taskList = useSelector(getTaskList)


  const handleDelete = () => {
    const taskListFiltered = taskList.filter((it: TData) => it.id !== id)
    const nextTask = taskListFiltered[0] || taskListFiltered[1]
    const url = `/tasks/${nextTask ? nextTask.id : ''}`
    dispatch(deleteTask(id))
    setTimeout(() => history.push(url), 0)
  }

  const handleCancel = () => {
    history.push(`/tasks/${id}`)
  }

  function modalHandlerClick(e: MouseEvent) {
    if (e.target instanceof Node && !ref.current?.contains(e.target)) handleCancel()
  }

  useEffect(() => {
    document.addEventListener('click', modalHandlerClick);
    return () => document.removeEventListener('click', modalHandlerClick)
  }, [ref]);

  const node = document.querySelector('#confirm_modal')
  if (!node) return null

  return ReactDOM.createPortal((
    <div className={root.main_wrap_modal} >
      <div className={s.modal_wrap} ref={ref}>
        <button className={s.cancel_btn} onClick={handleCancel}>
          <img src={Cancel} alt=""/>
        </button>
        <div className={s.content_wrap}>
          <h3 className={s.modal_title}>Удалить задачу?</h3>
          <button className={s.delete_btn} onClick={handleDelete}>Удалить</button>
          <button className={root.cancel_btn} onClick={handleCancel}>Отмена</button>
        </div>
      </div>
      <div className={root.modal_background}></div>
    </div>
  ), node)
}
