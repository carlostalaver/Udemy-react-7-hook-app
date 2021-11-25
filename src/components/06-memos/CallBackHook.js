import React, { useCallback, useState } from 'react'
import '../02-useEffect/effects.css'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10);


   /*  si trabajo con esta funcion en lugar del hook useCallback, cada vez que el componente CallBackHook se redenriza, por consecuencia volvera
        a generar la funcion increment, generando y almacenando una referencia en memoria, cada vez que se renderice el componente creará otra referencia
        const increment = () => {
        setCounter(counter + 1); 
    } */

    /* React guarda en memoria la refencia de la funcion en la constante increment, entonces cada vez que el state del componente cambie
       no se generará una nueva funcion sino que se conserva una unica referencia, a no ser que una de las dependencia en el array de dependencia
       cambie
    */
    const increment = useCallback((incre) => {
        setCounter( e => e + incre) // se realiza de esta manera para evitar tener otra dependencia "counter" en el hook useCallback
    }, [ setCounter ]);

    /* Si uso esta funcion, react volvera a renderizar el componente  increment porq una de las de la dependencia cambiara,
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
