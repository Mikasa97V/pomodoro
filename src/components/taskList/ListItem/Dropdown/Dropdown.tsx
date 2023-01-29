import React, {useEffect, useRef} from 'react'
import s from './dropdown.module.css'
import ReactDOM from 'react-dom'
import { IDropdownProps } from "./dropdownType";


export function Dropdown(props: IDropdownProps) {
  const {
    children,
    onClose,
    coords,
  } = props

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function dropdownHandlerClick(e: MouseEvent) {
      if (e.target instanceof Node && !ref.current?.contains(e.target))
        onClose?.();
    }

    document.addEventListener('click', dropdownHandlerClick);
    return () => document.removeEventListener('click', dropdownHandlerClick);
  }, [])

  const node = document.querySelector('#dropdown_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div ref={ref}
         className={s.listContainer}
         style={{
           top: `${coords?.top}px`,
           left: `${coords?.left}px`
         }}
    >
      {children}
    </div>
  ), node)
}
