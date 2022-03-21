import React from "react";
import "./TodoSearch.css";

import { TodoContext } from "../../TodoContext";

function TodoSearch() {

    const {search, setSearch} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearch(event.target.value)
    };

    return (
        <input 
            className="TodoSearch" placeholder="Sapere Aude" 
            value={search}
            onChange={onSearchValueChange}
        />
    )
}

export { TodoSearch };