import React, { useEffect } from 'react'
import Message from './Message'

import './effects.css'
import useForm from '../../hooks/useForm';

const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password} = formValues;

    useEffect(() => {
        console.log("Llamando al efecto...!");
    }, []); //con el 2do argumento este efecto solo ejecutara 1 vez cuando el componente se monte

    /*  con el 2do argumento [formValues] 
        este efecto solo ejecutara CADA vez que hay un cambio en el estado formValues 
    useEffect(() => {
        console.log("Llamando al efecto formValues...!");
    }, [formValues]);
    */


    /*  con el 2do argumento [formValues.email] 
        este efecto solo ejecutara CADA vez que hay un cambio en la propiedad email de estado formValues 
    useEffect(() => {
        console.log("Llamando al efecto formValues.email...!");
    }, [formValues.email]);
    */

    // es quivalente al efecto  inmediatamente anterior
    useEffect(() => {
        console.log("Llamando al efecto formValues.email...!");
    }, [email]);



    /* este codigo se llevo al hooks personalizado useForm.js
    const handleInputChange = ({ target }) => {
        setFormState({
            ...formValues,
            [target.name]: target.value
        })
    } */

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Postenado el form...');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>Use Effect Custom Hook</h1>
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

            <div className='form-group'>
                <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="******"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>


            <button type="submit" className="btn">
                Enviar
            </button>


            { (name === '123') && <Message  />}
        </form>
    )
}

export default FormWithCustomHook
