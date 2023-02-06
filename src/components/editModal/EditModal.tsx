import React, {useEffect, useRef, useState} from 'react'
import s from './editModal.module.css'
import root from 'index.module.css'
import ReactDOM from "react-dom"
import {useHistory, useRouteMatch} from "react-router-dom"
import Cancel from '../../assets/img/Cancel.svg'
import {useDispatch, useSelector} from "react-redux"
import {getTaskInfoById, getTaskList} from "../../features/tasks/selectors"
import {updateTaskInfo} from "../../features/tasks/actionTypes"
import {checkUniquenessOfTaskText} from "../../helpers/checkUniquenessOfTaskText";

export function EditModal() {
  const id = useRouteMatch<{ id: string }>("/tasks/:id")?.params.id
  const ref = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const history = useHistory()
  const taskInfo = useSelector(getTaskInfoById(id))
  const tasksList = useSelector(getTaskList)
  const [value, setValue] = useState(taskInfo.name || '')


  const onChangeInput = (e: { target: { value: React.SetStateAction<string> } }) => {
    setValue(e.target.value)
  }



  const handleEdit = () => {
    if (value.length === 0) return
    if (!checkUniquenessOfTaskText(value, tasksList)) return
    const TaskInfo = {
      id: id,
      name: value,
    }

    dispatch(updateTaskInfo(TaskInfo))
    setTimeout(() => history.push(`/tasks/${id}`), 0)
  }

  const handleCancel = () => {
    history.push(`/tasks/${id}`)
  }

  const handleKeyDown = (event: { key: string; preventDefault: () => void }) => {
    if (event.key != 'Enter') return
    event.preventDefault()
    handleEdit()
  }

  function modalHandlerClick(e: MouseEvent) {
    if (e.target instanceof Node && !ref.current?.contains(e.target)) handleCancel()
  }

  useEffect(() => {
    document.addEventListener('click', modalHandlerClick);
    return () => document.removeEventListener('click', modalHandlerClick)
  }, [ref]);

  const node = document.querySelector('#edit_modal')
  if (!node) return null

  return ReactDOM.createPortal((
    <div className={root.main_wrap_modal} >
      <div className={s.modal_wrap} ref={ref}>
        <button className={s.cancel_btn} onClick={handleCancel}>
          <img src={Cancel} alt=""/>
        </button>
        <div className={s.content_wrap}>
          <h3 className={s.modal_title}>Редактирование</h3>
          <input
            className={s.input}
            placeholder="Название задачи"
            value={value}
            onChange={onChangeInput}
            onKeyDown={handleKeyDown}
          />
          <button className={`${s.save_btn} ${root.button} ${root.primary_button}`} onClick={handleEdit}>Сохранить</button>
          <button className={root.cancel_btn} onClick={handleCancel}>Отмена</button>
        </div>
      </div>
      <div className={root.modal_background}></div>
    </div>
  ), node)
}
