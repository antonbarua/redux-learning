import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counter from './reducers';
import App from './components/App';

const store = createStore(counter);

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);