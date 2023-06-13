import React from 'react'
import s from './notfoundpage.module.css'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className={s.errorPageWrap}>
      <h2 className={s.errorStatusText}>Error 404 :(</h2>
      <h3 className={s.errorText}>Page not found...</h3>
      <Link className={s.goBackButton} to={'/'}>
        Go back
      </Link>
    </div>
  )
}
