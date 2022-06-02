import React from 'react';

const Directory = ({props}) => {
    return (
        <span className="bash__directory">
            <span className="bash__span-green">
                ertanfird@Work-PC
            </span>
            :
            <span className="bash__span-blue">
            ~
            </span>
            $
        </span>
    );
}

export default Directory;
