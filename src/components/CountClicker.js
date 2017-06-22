import React from 'react';
import { increment, decrement } from '../actions';

const CountClicker = (props) => {
    return (
        <div>
            <button onClick={() => { props.store.dispatch(increment()); }}>
                Increment
        </button>
            <button onClick={() => { props.store.dispatch(decrement()); }}>
                Decrement
        </button>
        </div>
    );
}

export default CountClicker;