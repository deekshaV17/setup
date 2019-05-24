import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from 'store/createStore';

import Pages from 'pages';
import App from 'modules/App';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App>
          <Pages />
        </App>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#main'),
);
