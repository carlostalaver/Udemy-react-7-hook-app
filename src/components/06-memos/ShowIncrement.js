import React from 'react'


//notar que es un componente memorizado
export const ShowIncrement = React.memo(({ increment }) => {

    console.log("Me volvi a ejecutar");

    return (
        <button
            className="btn btn-primary"
            onClick={ ()=> {
                increment( 5 );
            }}>
            Incrementar
        </button>
    )
}
)