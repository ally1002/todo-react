import React, { useState } from 'react'

function TodoForm(props) {
    const [value, setvalue] = useState('');

    const handleChange = e => {
        setvalue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.submit({
            id: Math.floor(Math.random() * 10000),
            text: value
        });

        setvalue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className='form-input'
                value={value}
                placeholder="Add a todo"
                onChange={handleChange}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm