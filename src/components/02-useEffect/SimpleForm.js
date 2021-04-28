import React, { useEffect, useState } from 'react'
import Message from './Message'

import './effects.css'

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        console.log("Llamando al efecto...!");
    }, []); //con el 2do argumento este efecto solo ejecutara 1 vez cuando el componente se monte

    /*  con el 2do argumento [formState] 
        este efecto solo ejecutara CADA vez que hay un cambio en el estado formState */
    useEffect(() => {
        console.log("Llamando al efecto formState...!");
    }, [formState]);

    /*  con el 2do argumento [formState.email] 
        este efecto solo ejecutara CADA vez que hay un cambio en la propiedad email de estado formState */
    useEffect(() => {
        console.log("Llamando al efecto formState.email...!");
    }, [formState.email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>Use Effect SimpleForm</h1>
            <hr />
            <div className='form-group'>
                <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group'>
                <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="email@email.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>


            { (name === '123') && <Message  />}
        </>
    )
}

export default SimpleForm
