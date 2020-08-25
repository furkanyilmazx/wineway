import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from '@wineway/App';
import combinedReducers from '@wineway/store';
import homePageServices from '@wineway/pages/HomePage/HomePage.service';
import productDetailPageServices from '@wineway/pages/ProductDetailPage/ProductDetailPage.service';

import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(homePageServices);
sagaMiddleware.run(productDetailPageServices);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
