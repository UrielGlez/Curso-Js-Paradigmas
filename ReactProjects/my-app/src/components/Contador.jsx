import React, { Fragment } from 'react'
import { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('Menor de edad');

    const decrement = () => {
        if (count > 0) setCount(count - 1);
        printMesagge(count - 1);
    }

    const increment = () => {
        setCount(count + 1);
        printMesagge(count + 1);
    }

    const printMesagge = (counter) => {
        console.log(`parametro: ${counter} variable: ${count}`);
        if(counter >= 18)
            setMessage('Mayor de edad');
        else    
            setMessage('Menor de edad');
    }

    return (
        <Fragment>
            <h1>Has incrementado estas veces {count}</h1>
            <button onClick={() => increment()}>+1</button>
            <button onClick={() => decrement()}>-1</button>
            <p>La persona es { message } </p>
        </Fragment>
    )

}

export default Count