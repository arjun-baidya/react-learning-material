import React, { useState } from 'react'

function NewTodo(props) {
    const [todo, setTodo] = useState('')
    const handleInput = (e) => {
        setTodo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.onTodo(todo)
        e.target.value = ''
    }
    return (
        <div style={{marginTop:'150px'}}>
            I am new todo
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">New todo : </label>
                <input type="text" id="todo" name='todo'  onChange={handleInput}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default NewTodo
