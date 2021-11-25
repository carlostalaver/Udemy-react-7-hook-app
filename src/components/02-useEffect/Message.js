import React,{ useEffect, useState} from 'react'

const Message = () => {
    
    const [coors, setCoors] = useState({x:0, y:0});

    const {x, y} = coors;

    useEffect(() => {
        const mouseMove = (e) => {
            const coors = {x: e.x, y:e.y}
            setCoors(coors);
        }

        window.addEventListener('mousemove', mouseMove);
        console.log("Montando <Message />")

        /* esta funcion se ejecutará cuando react desmonte el componente <Message />
           si no limpiara el evento addEventListener seguira a la escucha del mismo a pesar
           de q el componente haya sido desmotado, esto ocurrira por cada vez que monte el componente <Message />
           por eso es SUMAMENTE IMPORTANTE limpiar los efectos en REACT
        */
        return () => {
            console.log("Desmontando <Message />")
             window.removeEventListener('mousemove', mouseMove);
        }
    }, []);


    return (
        <div>
            <h3> Eres Genial</h3>
            <p> x:{ x } y: { y }</p>
        </div>
    )
}

export default Message
