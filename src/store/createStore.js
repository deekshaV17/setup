/* global config */
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [routerMiddleware(history), sagaMiddleware];

const store = createStore(
  rootReducer(history),
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

export { store, history };
