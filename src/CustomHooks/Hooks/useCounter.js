import React, { useState } from 'react'

function useCounter(val) {
    const [value, setValue] = useState(val)

    const increment = () => {
        setValue(value + 1)
    }
    const decrement = () => {
        setValue(value - 1)
    }
    return [value, increment, decrement]
}

export default useCounter
