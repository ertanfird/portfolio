import React from 'react';

const Header = ({section}) => {
    return (
        <div className="header">
            <div className="header__screen">
                {section}
            </div>
            <div className="header__logo">
                <div>Ertanfird</div>
                <div className="header__pic"></div>
            </div>
        </div>
    );
}

export default Header;
