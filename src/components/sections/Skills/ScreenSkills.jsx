import React from 'react';
import Directory from './Directory';
import Ascii from './Ascii';
import Skills from './Skills';
import {motion} from 'framer-motion';

const ScreenSkills = React.forwardRef((props, ref) => (

        <motion.div className='screen'  id="Skills" ref={ref}>
            <motion.div
            drag
            whileDrag={{ opacity: 0.6 }}
            dragElastic={false}
            dragMomentum={false}
            dragConstraints={{ left: -200, top: -200, right: 200, bottom: 200 }}
            whileTap={{cursor: "grabbing"}}
            transition={{ ease: "easeOut", duration: 0.28 }}
            className='bash'
            translate="no"
            >
                <div className='bash__header'>
                    <div className='bash__title'>
                        <div className="bash__logo"></div>
                        <span>Bash</span>
                    </div>
                    <div className="bash__buttons">
                        <div className="bash__circle"></div>
                        <div className="bash__circle"></div>
                        <div className="bash__circle"></div>
                    </div>
                </div>
                <div className="bash__console">
                    <div className="bash__item">
                        <Directory />
                        <span className="bash__span">portfolio run</span>
                    </div>
                    <Ascii />
                    <Skills />
                    <div className="bash__item">
                        <Directory />
                        <input type="text" size="4" className="bash__input" defaultValue=""></input>
                    </div>
                </div>
            </motion.div>
        </motion.div>

));


export default ScreenSkills;
