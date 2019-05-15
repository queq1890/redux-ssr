import { createStore, compose, applyMiddleware, Store } from 'redux';
import { History } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createRootReducer, RootState } from '../redux/rootReducer';
import createSagaMiddleware, { END } from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

interface SSRStore extends Store {
  runSaga: any;
  close: () => void;
}

const composeEnhancers =
  typeof (window as any) === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const configureStore = (initialState: RootState, history: History) => {
  const middleWare = applyMiddleware(routerMiddleware(history), sagaMiddleware);
  const store: SSRStore = createStore(createRootReducer(history), initialState, composeEnhancers(middleWare));

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return {
    history,
    store,
  };
};
