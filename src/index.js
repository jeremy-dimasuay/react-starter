import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'store/reducers';
/* eslint-disable-next-line */
import App from './app';

const store = createStore(reducers);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

render(app, document.getElementById('app'));
