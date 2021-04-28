import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css'

export const MemoHook = () => {
     
    const { counter , increment } = useCounter(5000);

    const [show, setShow] = useState(true);

    const procesoPesado = () => {

        for (let i = 0; i < iteraiones; i++) {
            console.log('Ahi vamos... !');
        }

        return `${ iteraiones } iterciones realizadas.`
    }

    return (
        <div>
            <h1> MemoHook </h1>
            <h3>Memorize: <small> { counter } </small> </h3>
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
