import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

type RouterState = import('connected-react-router').RouterState;

export type RootState = {
  router: RouterState;
};

export const createRootReducer = history =>
  combineReducers<RootState>({
    router: connectRouter(history),
  });

export const initState = (): Partial<RootState> => {
  return {};
};
