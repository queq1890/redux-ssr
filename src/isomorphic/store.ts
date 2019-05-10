import { createStore, compose, applyMiddleware } from 'redux';
import { History } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createRootReducer, RootState } from '../redux/rootReducer';

const composeEnhancers =
  typeof (window as any) === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

export const configureStore = (initialState: RootState, history: History) => {
  const middleWare = applyMiddleware(routerMiddleware(history));
  const store = createStore(createRootReducer(history), initialState, composeEnhancers(middleWare));

  return {
    history,
    store,
  };
};
