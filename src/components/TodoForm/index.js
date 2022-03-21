import React from "react";
import "./TodoForm.css";

import { TodoContext } from "../../TodoContext";

function TodoForm() {

    const [newTodo, setNewTodo] = React.useState('');

    const {
        addTodo,
        setFlagModal
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setFlagModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodo);
        setFlagModal(false);
    };

    const onChange = (event) => {
        setNewTodo(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                value={newTodo}
                onChange={onChange}
                placeholder="NEW TODO"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                >
                    CANCELAR
                </button>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    type="submit"
                >
                    AÑADIR
                </button>
            </div>
        </form>
    );
}

export { TodoForm };