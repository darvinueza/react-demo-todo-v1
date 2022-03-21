import React from 'react';
import "./TodoIcon.css";

import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';

function TodoIcon({ type, color, onClick }) {

    const iconTypes = {
        "check": (<CheckSVG />),
        "delete": (<DeleteSVG />)
    };

    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type]}
        </span>
    )
}

export { TodoIcon };