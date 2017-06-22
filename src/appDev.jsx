import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Init from './Init.jsx';


const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('react-app')
    );
};

render(Init);

if (module.hot) {
    module.hot.accept('./Init.jsx', () => {
        render(Init);
    });
}