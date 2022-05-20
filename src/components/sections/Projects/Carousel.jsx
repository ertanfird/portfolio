import React, {useRef, useEffect, useState}  from 'react';
import {motion} from 'framer-motion';
import Frame from './Frame';

const Carousel = ({props}) => {
    const projectsArr = [];

    projectsArr[0] = {
        name: "mirror",
        link: "https://mirror-test.000webhosting.www/index.php",
        description: "Satellite network provider startap (Frontentd only)"
    }
    projectsArr[1] = {
        name: "basalt",
        link: "https://ertanfird.github.io/basalt/",
        description: "Password generator with hash salting algorithm"
    }
    projectsArr[2] = {
        name: "northCrimea",
        link: "https://north-crimea.ru",
        description: "Site of animal shelter on wordpress"
    }
    projectsArr[3] = {
        name: "aquamarine",
        link: "https://ertanfird.github.io/aquamarine/",
        description: "Responsive template for aqua business"
    }
    projectsArr[4] = {
        name: "memoGame",
        link: "https://ertanfird.github.io/memogame/",
        description: "Pet project memo game on react"
    }
    projectsArr[5] = {
        name: "ironman",
        link: "https://ironman-test.000webhostapp.com/",
        description: "The smart daily planner that helps you manage your time wisely. Under development"
    }

    const [withCarousel, setWidthCarousel] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidthCarousel(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
            <motion.div
            className="carousel__inner"
            drag="x"
            dragConstraints={{right: 0, left: -withCarousel}}
            >
                {projectsArr.map((project) =>
                        <Frame project={project} key={project.link}/>
                )}
            </motion.div>
        </motion.div>
    );
}

export default Carousel;
