import React from 'react'
import useCounter from '../Hooks/useCounter'

function CounterTwo() {
    const [value, increment, decrement] = useCounter(4)
    return (
        <div style={{backgroundColor:'gray',}}>
            <p style={{color:'white',paddingTop:'20px'}}>This is custom hook practice section</p>
            <h1>Counter Two: Please Click</h1>
            <h2 style={{color:'white'}}>{value}</h2>
            <div style={{paddingBottom:'20px'}}>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    )
}

export default CounterTwo
