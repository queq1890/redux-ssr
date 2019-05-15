import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import CounterReducer from './counter/reducer';
import AnimalReducer from './animals/reducer';

type RouterState = import('connected-react-router').RouterState;

export interface RootState {
  router: RouterState;
}

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    counter: CounterReducer,
    animals: AnimalReducer,
  });

// TODO: not use any
export const initState = (): any => {
  return {
    // ...CounterState,
  };
};
