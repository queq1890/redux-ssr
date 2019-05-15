import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Routes from './Routes';
import { initState } from './redux/rootReducer';
import { configureStore } from './isomorphic/store';
import rootSaga from './redux/rootSaga';

declare var window: { INITIAL_STATE: any };

const initialState: any = window.INITIAL_STATE || initState();
delete window.INITIAL_STATE;

const preload = configureStore(initialState, createBrowserHistory());
preload.store.runSaga(rootSaga);

ReactDOM.hydrate(
  <Provider store={preload.store}>
    <ConnectedRouter history={preload.history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
