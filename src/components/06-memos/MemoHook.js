import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css'

export const MemoHook = () => {
     
    const { counter , increment } = useCounter(500);

    const [show, setShow] = useState(true);

    const procesoPesado = (iteraiones) => {

        for (let i = 0; i < iteraiones; i++) {
            console.log('Ahi vamos... !');
        }

        return `${ iteraiones } iterciones realizadas.`
    }

    /* useMemo me permite mantener en memoria el resulado de llamar procesoPesado y mientras no cambie
        la dependencia counter, react no volvera a ejecutar dicha funcion.
    */
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ])

    return (
        <div>
            <h1> MemoHook </h1>
            <h3>Counter: <small> { counter } </small> </h3>
            <hr />

            {/* <p>{ procesoPesado(counter) }</p> */}

            <p>{ memoProcesoPesado }</p>

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
