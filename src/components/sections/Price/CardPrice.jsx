import React from 'react';
import {motion} from 'framer-motion';
import * as priceIcons from './priceIcons';

const CardPrice = ({service}) => {
    return (
        <motion.div className="card">
            <img
                className="card__icon"
                src={priceIcons[`${service.icon}`]}
                alt="ALT"
            />
            <div className="card__header">
                {service.title}
            </div>
            <div className="card__price">
                ${service.price}
            </div>
            <div className="card__description">
                {service.description}
            </div>
        </motion.div>
    );
}

export default CardPrice;
