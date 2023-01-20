import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
import TomatoLogo from '../../assets/img/TomatoLogo.svg'
import Equalizer from '../../assets/img/Equalizer-statistics.svg'
// import Home from '../../assets/img/Home.svg'

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper">
      <NavLink to="/" className="brand-logo">
        <div className="logo-wrap">
          <img src={TomatoLogo}/>
          <span>pomodoro_box</span>
        </div>
      </NavLink>
      <ul className="NavLinks-wrap">
        {/*<li cy-data="home-nav-link">*/}
        {/*  <NavLink to="/" className="NavLink">*/}
        {/*    <div className="link-wrap">*/}
        {/*      <img src={Home}/>*/}
        {/*      <span>Главная</span>*/}
        {/*    </div>*/}
        {/*  </NavLink>*/}
        {/*</li>*/}
        <li className="list-item">
          <NavLink to="/statistics" className="NavLink">
            <div className="link-wrap">
              <img src={Equalizer}/>
              <span>Статистика</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
)
