import React from 'react'
import s from './statistics.module.css'
import {StatisticalCards} from "../../components/statisticalCards";
import {TextInfoBlock} from "./textInfoBlock";
import {PomodorsBlock} from "./pomodorsBlock";

export const Statistics: React.FC = () => {

  return (
    <div className={s.main_wrap}>
      <div className={s.main_content_wrap}>
        <div className={s.main_chart_content_wrap}>
            <h3 className={s.page_title}>Ваша активность</h3>
            <div className={s.main_info_wrap}>
              <TextInfoBlock />
              <PomodorsBlock />
            </div>
        </div>
        <div className={s.main_chart_wrap}>
          <div>Select</div>
          <div style={{height: '471px'}}>Chart</div>
        </div>
      </div>
      <StatisticalCards/>
    </div>
  )
}
