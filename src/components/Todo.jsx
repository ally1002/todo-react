import { useState } from "react"

let newId = 0;
function Todo() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([{
        id: 0,
        text: 'Example'
    }]);

    const handleSubmit = e => {
        e.preventDefault();
        newId++

        const todo = [...todos, {
            id: newId,
            text: text
        }];


        setTodos(todo);
        setText('');
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
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default Todo