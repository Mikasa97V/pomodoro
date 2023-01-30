import React, {useCallback, useState} from 'react'
import s from './listItem.module.css'
import {Link} from "react-router-dom";
import {MenuSettings} from "./MenuSettings";
import {IProps} from "./listItemType";


export function ListItem({
                           id,
                           pomodors,
                           name,
                           changeListOrder
                         }: IProps) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const changeListOrderHandle = useCallback(() => {
    changeListOrder(id)
  }, [changeListOrder])

  return (
    <div className={s.main_wrap}>
      <Link to={`/tasks/${id}`} className={s.link_width} onClick={changeListOrderHandle}>
        <div className={s.task_info_wrap}>
          <div className={s.pomodors}>
            <span className={s.pomodors_text}>{pomodors}</span>
          </div>
          <div className={s.task_text}>{name}</div>
        </div>
      </Link>
      <Link to={`/tasks/${id}/settings`}>
        <MenuSettings id={id} isDropDownOpen={isDropDownOpen} setIsDropDownOpen={setIsDropDownOpen}/>
      </Link>
    </div>
  )
}
