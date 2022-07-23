import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';

let newId = 0;
function Todo() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([{
        id: 0,
        text: 'Example'
    }]);

    const handleSubmit = e => {
        e.preventDefault();
        if(text.trim().length == 0) return;
        newId++

        const todo = [...todos, {
            id: newId,
            text: text
        }];


        setTodos(todo);
        setText('');
    }

    const handleDelete = id => {
        const todo = [...todos];
        setTodos(todo.filter(todo => todo.id != id));
    }

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder="Write a task here"
                    />
                </form>
            </div>
            <div className="list">
                {todos.map(todo => (
                    <>
                        <div className="item">{todo.text}
                            <div className="actions">
                                <button
                                    className="btn"
                                    onClick={() => {handleDelete(todo.id)}}
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default Todo