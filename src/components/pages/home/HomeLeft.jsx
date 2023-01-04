import React from 'react'
import globe from '../../../assets/globe.png'
import { NavLink } from 'react-router-dom'
import './homeleft.css'

const HomeLeft = () => {

    return (
        <nav className='left-menu-bar'>
            <NavLink className='left-menubar-childs left-menu-links' to={'/'}><p>Home</p></NavLink>
            <p className='left-menubar-childs public'>PUBLIC</p>
            <NavLink className='left-menubar-childs left-menu-links' to={'/question'}>
                <img className='left-menu-img' src={globe} alt='err' />
                <p>Questions</p>
            </NavLink>
            <NavLink className='left-menubar-childs left-menu-links left-menu-tags' to={'/tags'}><p>Tags</p></NavLink>
            <NavLink className='left-menubar-childs left-menu-links left-menu-tags' to={'/users'}><p>Users</p></NavLink>
        </nav>
    )
}

export default HomeLeft