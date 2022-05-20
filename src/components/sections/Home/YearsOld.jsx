import React from 'react';

const YearsOld = ({props}) => {
    var yearsOld = new Date();
    yearsOld = yearsOld.getFullYear() - 2001;
    return (
        <span>
            {yearsOld}
        </span>
    );
}

export default YearsOld;
