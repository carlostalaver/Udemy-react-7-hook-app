import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {

        const [user, setUser]  = useState({});
    /* value= { user } hará que el obj user esté disponible para todos los hijos, nietos, bisnietos... 
       de  UserContext.Provider, para obtener el valor en uno de los hijos se usa el hook useContext 
       pasandole como parametro mi contexto, es decir, el UserContext, ver HomeScreem.js
       */
    return (
        /* Ojo que UserContext es mi componente de orden superior que definí en UserContext.js.
            {user, setUser}: es un objeto literal que le paso en la propiedad value.
            cualquier cambio que se haga en el objeto user lo pillará UserContext y comunicará dichos cambios
            al resto de los hijos que hagan uso de este contexto
        */
        <UserContext.Provider value= { {user, setUser} }>
            <AppRouter />
        </UserContext.Provider>
    )
}
