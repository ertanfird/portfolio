import React from 'react';
import './NavBar.module.sass';
import { Link, animateScroll as scroll } from "react-scroll";

const NavButton = ({name}) => {
    const modificator = name.toLowerCase();
    const classBtn = 'navbar__btn';
    const classBtnM= ` ${classBtn + '-' + modificator}`;
    return (
        <Link
            className={classBtn + classBtnM + ' active'}
            activeClass="active"
            to={name}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
        >
            {name}
        </Link>
    );
}

export default NavButton;
