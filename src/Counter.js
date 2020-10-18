import React, { useState } from "react";
import './Counter.css';


function Counter ({step =1}) {
    const [count, setCount] = useState(0);

    return (
        <div className="Counter">
            <h2>{count}</h2>
            <button onClick={() => setCount(count + step)}>+1</button>
        </div>
    );

}

export default Counter;