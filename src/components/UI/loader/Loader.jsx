import React from 'react';
import classes from './Loader.module.sass'

const Loader = ({props}) => {
    return (
        <div className={classes.loader}>
            <div className={classes.loader__logo}>
                <div className={classes.loader__picture}></div>
                <div className={classes.loader__signature}></div>
            </div>
        </div>
    );
}

export default Loader;
