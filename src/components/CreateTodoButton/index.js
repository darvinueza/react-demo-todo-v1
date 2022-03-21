import React from "react";

import './CreateTodoButton.css';

function CreateTodoButton(props) {

    const onClickButton = () => {
        props.setFlagModal(flag => !flag);
    }

    return(
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    )
}
 export { CreateTodoButton };