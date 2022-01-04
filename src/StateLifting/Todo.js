import React from 'react'

function Todo(props) {
    const {todo} = props
    return (
        <p>
            {todo}
        </p>
    )
}

export default Todo
