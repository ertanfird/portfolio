import React from 'react';
import YearsOld from './YearsOld';

const ScreenHome = React.forwardRef((props, ref ) => (
        <div className='screen' id="Home" ref={ref}>
            <div className='resume'>
                <div>
                    Nikita N<br/>
                    <YearsOld /> years old<br/>
                    <br/>
                    Frontend<br/>
                    JS Developer<br/>
                    Level skill - junior<br/>
                    <br/>
                    My main specialty is sysadmin, but I took a front-end bias and learned on my own. I treat each project like a
                    sculpture, grinding out all its facets, I create something new and unusual, something that delights the site
                    visitors.
                </div>
            </div>
        </div>
    ));

export default ScreenHome;
