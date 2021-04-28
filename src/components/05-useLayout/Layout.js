import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'
import './Layout.css'

export const Lauyot = () => {

    const {counter, increment} =  useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];

    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
       setBoxSize(pTag.current.getBoundingClientRect());

    }, [quote])

    const pTag = useRef();


    return (
        <div>
            <h1>Lauyot Effect..!!!</h1>
            <hr />
            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref = { pTag }
                >{ quote }
                </p>
            </blockquote>

            <pre>
                {JSON.stringify( boxSize, null, 3) }
            </pre>

            <button
                className="btn btn-primary"
                onClick= { () => increment(1) }>
                Next
            </button>
        </div>
    )
}
