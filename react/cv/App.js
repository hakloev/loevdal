import React, { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p style={ { color: 'red' } }>This is from React! - { count }</p>
            <button onClick={ () => setCount(count + 1) }>
                Increase count here
            </button>
        </div>
    )
}
