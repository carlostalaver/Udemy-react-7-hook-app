import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomeScreem = () => {

   const { user } = useContext(UserContext);

   console.log(user);

    return (
        <div>
            <h1>HomeScreem</h1>
            <hr/>

            <pre className=" container ">
               { JSON.stringify(user, null, 3) }
            </pre>
            
        </div>
    )
}
