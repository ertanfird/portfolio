import React from 'react';
import CarouselPrice from './CarouselPrice';

const ScreenPrice = React.forwardRef((props, ref) => (
        <div className='screen'  id="Price" ref={ref}>
            <CarouselPrice />
        </div>
    ));


export default ScreenPrice;
