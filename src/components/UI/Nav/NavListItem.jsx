import React from 'react'
import { NavLink } from "react-router-dom";
const NavListItem = ({title, iconPath, to}) => {
  return (
    <li>
      <NavLink className='nav-link d-flex flex-column align-items-center justify-content-center' to={to}>
        <img src={iconPath} alt="home icon" />
        <span>{title}</span>
      </NavLink>
    </li>
  )
}

export default NavListItem