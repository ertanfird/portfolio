import React from 'react';
import NavButton from './NavButton';
import './NavBar.module.sass';

const NavBar = ({long, media}) => {
    const sections = ["Home", "Skills", "Projects", "Price"];

    return (
        <div className='navbar'>
            {sections.map((name) =>
                <NavButton name={name} long={long} media={media} key={name}/>
            )}
        </div>
    );
}

export default NavBar;
