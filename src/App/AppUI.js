import React from "react";

import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
import { TodosError } from "../components/TodosError";
import { TodosLoading } from "../components/TodosLoading";
import { EmptyTodos } from "../components/EmptyTodos";

function AppUI() {

    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        flagModal,
        setFlagModal
    } = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoCounter />
            
            <TodoSearch />
            
            <TodoList>
                {error && <TodosError error={error} />}
                {loading && <TodosLoading />}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {flagModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton 
                setFlagModal={setFlagModal}
            />
        </React.Fragment>
    );
}

export { AppUI };