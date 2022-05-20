import React, {useRef, useEffect, useState}  from 'react';
import {motion} from 'framer-motion';
import CardPrice from './CardPrice.jsx';

const CarouselPrice = ({props}) => {
    const [withCarouselPrice, setWidthCarouselPrice] = useState(0);
    const carouselPrice = useRef();

    const priceListArr = [];

    priceListArr[0] = {
        title: "Web-design",
        icon: "webDesign",
        price: "20 - 120",
        description: "Create design maket your site/app price for section ~ 6$"
    }
    priceListArr[1] = {
        title: "Landing",
        icon: "landing",
        price: "30 - 140",
        description: "Create landing site with adaptive price for section ~ 8$"
    }
    priceListArr[2] = {
        title: "Site with CMS",
        icon: "cms",
        price: "42 - 180",
        description: "Create site with CMS price for section ~ 4$ price for plugin ~ $16"
    }
    priceListArr[3] = {
        title: "Single page app",
        icon: "react",
        price: "48 - 300",
        description: "Create single page application on React price for function or component ~ 12$"
    }

    useEffect(() => {
        setWidthCarouselPrice(carouselPrice.current.scrollWidth - carouselPrice.current.offsetWidth);
    }, []);


    return (
        <motion.div  className="price-list">
            <div className="price-list__header">
                Price-list
            </div>
            <motion.div className="price-list__carousel" whileTap={{cursor: "grabbing"}}>
                <motion.div
                ref={carouselPrice}
                className="price-list__inner"
                drag="x"
                dragConstraints={{right: 0, left: -withCarouselPrice}}
                >
                    {priceListArr.map((service) =>
                        <CardPrice service={service} key={service.title}/>
                    )}
                </motion.div>
            </motion.div>

        </motion.div>
    );
}


export default CarouselPrice;
