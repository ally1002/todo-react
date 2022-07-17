import React, { useState } from 'react'

function TodoForm() {
    const [text, setText] = useState('');

    const handleChange = e => {
        setText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        setText('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className='form-input'
                value={text}
                placeholder="Add a todo"
                onChange={handleChange}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm