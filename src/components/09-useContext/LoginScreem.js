import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreem = () => {
    const { user, setUser } = useContext(UserContext);


    return (
        <div>
            <h1>LoginScreem</h1>
            <hr/>

            <button  className="btn btn-primary" onClick= { () => setUser({ id: 1234, name: 'carlos'}) }>
                Login
            </button>
            
        </div>
    )
}