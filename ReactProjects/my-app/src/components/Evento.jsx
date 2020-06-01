import React, {Fragment} from 'react'
import { useState } from 'react'

const Evento = () => {
    const [text, textState] = useState('Este es un rexto desde estado');
    return (
        <Fragment>
            <h1>{text}</h1>
            <button onClick = {() => textState('Texto Modificado')}>Cambiar Texto</button>
        </Fragment>
    )

}

export default Evento