import React from 'react'

/* React.memo permite guardar el componente en memoria para que solamente se renderice cuando
   cuando el valor value cambie y no cuando el stado de algun componente X que hace uso de este 
   componente small cambie, ver ejemplo en el componente Memorize.js*/
export const Small = React.memo( ({ value }) => {
    console.log('Me volvi a llamar :( ');
    return (
        <small>
            {  value }
        </small>
    )
})
