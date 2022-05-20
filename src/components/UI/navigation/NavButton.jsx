import React, {useState, useEffect} from 'react';
import './NavBar.module.sass';
import { Link } from "react-scroll";
import * as navIcons from './navIcons'

const NavButton = ({name, long, media}) => {
    const modificator = name.toLowerCase();
    const classBtn = 'navbar__btn';
    const classBtnM = ` ${classBtn + '-' + modificator}`;

    return (
        <Link
            className={classBtn + classBtnM + long}
            to={name}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
        >
            <div className="navbar__title">
                {name}
            </div>
            <img src={navIcons[`${name}`]} alt={name} className="navbar__icon"/>
        </Link>
    );
}

export default NavButton;
