import React from 'react'
import { NavbarStyledDiv } from './NavbarStyle'
import logo from '../../images/logo.png'
import { Outlet } from 'react-router-dom'

const NavbarFile = () => {
  return (
    <NavbarStyledDiv>
        <div className="grid-align">
            <h2 className='logo'>
                <img src={logo} alt="logo" />
                <span>WALL .E</span>
            </h2>
            <div className='change-theme'></div>
            <input type="search" placeholder='Search.'/>
        </div>

        <Outlet/>

    </NavbarStyledDiv>
  )
}

export default NavbarFile