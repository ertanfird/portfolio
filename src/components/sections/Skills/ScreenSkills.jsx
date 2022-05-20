import React from 'react';
import Directory from './Directory';
import Ascii from './Ascii';
import Skills from './Skills';

const ScreenSkills = React.forwardRef((props, ref) => (

        <div className='screen'  id="Skills" ref={ref}>
            <div className='bash'>
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
                        <input type="text" className="bash__input" defaultValue=""></input>
                    </div>
                </div>
            </div>
        </div>

));


export default ScreenSkills;
