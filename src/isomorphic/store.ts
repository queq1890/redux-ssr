import { createStore, applyMiddleware } from 'redux';
import { History } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createRootReducer, RootState } from '../redux/rootReducer';

export const configureStore = (initialState: RootState, history: History) => {
  const middleWare = applyMiddleware(routerMiddleware(history));
  const store = createStore(createRootReducer(history), initialState, middleWare);

  return {
    history,
    store,
  };
};
