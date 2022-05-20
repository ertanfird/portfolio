import React from 'react';
import * as images from './images.js';
import {motion} from 'framer-motion';

const Frame = ({project}) => {
    function newTapOpen(e) {
        e.preventDefault();
        window.open(e.target.href, '_blank');
    }

    return (
        <motion.div  className='frame'>
            <div className='frame__header'>
                <div className='frame__search'>
                    <a
                        href={project.link}
                        className="frame__link"
                        onClick={newTapOpen}
                    >
                        {project.link}
                    </a>
                </div>
            </div>
            <div className='frame__body'>
                <img
                    className="frame__picture"
                    src={images[`${project.name}` + 'Screen']}
                    alt={project.name}
                />
                <div className="frame__inner">
                    <img
                        className="frame__logo"
                        src={images[`${project.name}` + 'Logo']}
                        alt={project.name}
                    />
                    <div className="frame__description">
                        {project.description}
                    </div>
                    <a
                        href={project.link}
                        className="frame__btn"
                        onClick={newTapOpen}
                    >
                        Start
                    </a>
                </div>
                <iframe className="frame__iframe"></iframe>
            </div>
        </motion.div>
    );
}


export default Frame;
