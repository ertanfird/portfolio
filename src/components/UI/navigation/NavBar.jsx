import React from 'react';
import NavButton from './NavButton';
import './NavBar.module.sass';

const NavBar = ({}) => {
    return (
        <div className='navbar'>
            <NavButton name="Home"/>
            <NavButton name="Skills"/>
            <NavButton name="Projects"/>
            <NavButton name="Price"/>
        </div>
    );
}

export default NavBar;
