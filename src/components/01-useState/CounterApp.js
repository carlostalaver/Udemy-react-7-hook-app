import React, { useState } from 'react';
import './counter.css';

const CounterApp = () => {
    const [counter, setCounter] = useState({
        
    });

    return (
        <>
          <h1>Counter { counter }  </h1>  
          <hr/>

          <button
            className="btn btn-primary"
            onClick={() => {
                setCounter(counter + 1)
            }}
            >
                +1
          </button>
        </>
    )
}

export default CounterApp
