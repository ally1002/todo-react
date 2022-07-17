import React, { useState } from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || todo.text.trim().length == 0) {
            return;
        }
        const newTodo = [todo, ...todos]

        setTodos(newTodo);
    }

    return (
        <div>
            <TodoForm submit={addTodo} />
        </div>
    )
}

export default TodoList