import React from 'react';
import CountClicker from './CountClicker';
import CountShow from './CountShow';

const App = (props) => (
    <div>
        <CountClicker store={props.store} />
        <CountShow store={props.store} />
    </div>
);

export default App;