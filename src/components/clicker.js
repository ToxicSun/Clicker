import React, {useState} from 'react';
import './clicker.css';

function Clicker( ) {
    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(count + 1);
    }

    const countReset = () => {
        setCount(count * 0);
    }
    return (
        <div className="container">
            <div className='counter'>{count}</div>
            <div>
                <button className='button' onClick={countUp}>Click me!</button><br></br>
                <button className='button-reset' onClick={countReset}>Reset</button>
            </div>
        </div>
    )
}

export default Clicker;