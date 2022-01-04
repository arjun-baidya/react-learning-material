import React from 'react'
import Todo from './Todo'

function Todos(props) {
    const  {todos} = props
    console.log(todos)
    return (
        <div>
            {todos.map((todo, index) => {
                return (
                    <div key={index}>
                       <Todo todo={todo} />
                    </div>
                )    
            }
            )}
        </div>
    )
}

export default Todos
