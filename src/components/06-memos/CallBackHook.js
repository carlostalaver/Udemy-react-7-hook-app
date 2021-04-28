import React, { useCallback, useState } from 'react'
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10);


    /* React guarda en momoria la refencia de la funcion incremente */
    const increment = useCallback((incre) => {
        setCounter( e => e + incre) // se realiza de esta manera para evitar tener otra dependencia "counter" en el hook useCallback
    }, [ setCounter ]);

    /* Si uso esta funcion react volvera a renderizar el componente  increment porq una de las de la dependencia cambiara,
       en este caso, la dependencia counter
   
    const increment = useCallback((incre) => {
        setCounter( counter + incre) 
    }, [ setCounter, counter ])
    */
    return (
        <div>
            <h1>useCallBack  Hook { counter }</h1>
            <hr />

            <ShowIncrement  increment= { increment }/>
        </div>
    )
}
