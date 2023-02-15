import React, {useState} from 'react';
import classes from './Counter.module.scss';

function Counter() {
    let [state, setState] = useState(0);
    const increment = () =>{
        setState(state  += 1)
    }
    return (
        <div className={classes.btn}>
            <h1>{state}</h1>
            <button onClick={increment}>Counter</button>
        </div>
    );
}

export default Counter;
