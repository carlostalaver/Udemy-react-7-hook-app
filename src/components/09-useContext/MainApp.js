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
        <UserContext.Provider value= { {user, setUser} }>
            <AppRouter />
        </UserContext.Provider>
    )
}
