import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './header.module.css'

function Header() {
    return (
        <div className={s.container}>
            <NavLink to='/pre-junior' className={s.linkClass} activeClassName={s.activeLinkClass}>Pre-junior</NavLink>
            <NavLink to='/junior' className={s.linkClass} activeClassName={s.activeLinkClass}>Junior</NavLink>
            <NavLink to='/juniorPlus' className={s.linkClass} activeClassName={s.activeLinkClass}>Junior+</NavLink>
            <div className={s.square}>&#9776;</div>
        </div>
    )
}

export default Header
