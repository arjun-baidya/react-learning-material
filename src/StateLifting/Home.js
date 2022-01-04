import React, { useState } from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos'
const dummytodos = ['todos1','todos2']



function Home() {
    const [todos, setTodos] = useState(dummytodos)
    const handleTodo = (todo) => {
        setTodos([...todos, todo])
    }

    return (
        <div>
            {/* NewTodo component is child component of Home component */}
            <NewTodo onTodo={handleTodo}/>
            <Todos todos={todos} />
        </div>
    )
}

export default Home