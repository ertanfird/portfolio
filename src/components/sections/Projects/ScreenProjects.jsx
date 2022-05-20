import React from 'react';
import Carousel from './Carousel';

const ScreenProjects = React.forwardRef((props, ref) => (
        <div className='screen'  id="Projects" ref={ref}>
            <Carousel />
        </div>
    ));

export default ScreenProjects;
