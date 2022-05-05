import React from 'react';
import classes from './Button.module.sass'

const Button =  function({children, ...props}) {

	return (
			<button {...props} className={classes.Button}>
				{children}
			</button>
		)
}

export default Button;
