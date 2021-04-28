import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css'
import { Small } from './Small';

export const Memorize = () => {
     
    const { counter , increment } = useCounter(10);

    const [show, setShow] = useState(true);


    /* como este <Small value={ counter } esta en un memo, cuando se modifique el state del componente
       padre "Memorize.js", no se volvera a renderizar el componente Small */
    return (
        <div>
            <h1>Memorize: <Small value={ counter } /></h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick= {() => { increment() }}
            >
                +1
            </button>

            
            <button
                className="btn btn-outline-primary ml-3"
                onClick= {() => { setShow(!show) }}
            >
                Show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
