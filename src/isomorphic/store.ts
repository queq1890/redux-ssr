import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory, History } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createRootReducer, RootState } from '../redux/rootReducer';

export const configureStore = (initialState: Partial<RootState>, history: History) => {
  const middleWare = applyMiddleware(routerMiddleware(history), createRootReducer(history), hoge);
};
