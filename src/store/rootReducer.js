import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from 'modules/App/store/reducer';


const appReducer = (history) => combineReducers({
  router: connectRouter(history),
  app,
});

export default appReducer;
