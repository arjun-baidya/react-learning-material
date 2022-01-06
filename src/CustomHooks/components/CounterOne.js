import React from 'react'
import useCounter from '../Hooks/useCounter'

function CounterOne() {
    const [value,increment, decrement] = useCounter(1)
    return (
        <div style={{backgroundColor:'gray', marginTop:'20px'}}>
            <p style={{color:'white',paddingTop:'20px'}}>This is custom hook practice section</p>
            <h1>Counter One: Please Click</h1>
            <h2 style={{color:'white'}}>{value}</h2>
            <div style={{paddingBottom:'20px'}}>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    )
}

export default CounterOne
