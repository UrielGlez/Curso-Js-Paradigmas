import React, {Fragment} from 'react'
import { useState } from 'react'

const Foco = (settings) => {
    const [foco, focoState] = useState(false);
    
    const turn = () => focoState(foco => !foco);

    return (
        <div style={{
            position: 'absolute',
            top: settings.ubicationY,
            left: settings.ubicationX
        }}>
            <img width="25px" id="img" src={foco ? '/images/focoOn.png' : '/images/focoOff.png'} onClick={turn} alt="focoOff"/>
            <p> {settings.ubication} </p>
        </div>
    )

}

export default Foco