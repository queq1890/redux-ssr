import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import CounterReducer, { initialState as CounterState } from './counter/reducer';

type RouterState = import('connected-react-router').RouterState;

export type RootState = {
  router: RouterState;
};

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    counter: CounterReducer,
  });

// TODO: not use any
export const initState = (): any => {
  return {
    ...CounterState,
  };
};
