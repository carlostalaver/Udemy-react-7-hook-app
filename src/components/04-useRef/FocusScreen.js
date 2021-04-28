import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

const FocusScreen = () => {

    const inputRef = useRef({});

    console.log("useRef es ", inputRef);

    const handleClick = () => {
        inputRef.current.select();
    };

    return (
        <div>
            <div> Focus Screen....!</div> 
            <hr/>

            <input
                ref= { inputRef }
                className="form-control"
                placeholder="Su nombre"
                type="text"
                name="nombre"
                >
            </input>

            <button className="btn btn-outline-primary mt-5" onClick={ handleClick }>
                Focus
            </button>
        </div>
    )
}

export default FocusScreen
