import React, { useState } from 'react'
import '../02-useEffect/effects.css'
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1> Real Example Ref...!</h1>

            { show && <MultipleCustomHook />}

            <button
                className="btn btn-primary mt-5"
                onClick={() => {
                    setShow(!show);
                }}
            >
               { show ? 'Hide' : 'Show'}
            </button>

        </div>
    )
}
