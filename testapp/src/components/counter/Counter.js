import React from 'react';

export default function Counter({onIncrement, onDecrement}) {
    return (
        <div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    )
}
