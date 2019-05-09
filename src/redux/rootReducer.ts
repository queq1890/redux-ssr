import { combineReducers } from 'redux';

type RouterState = import('connected-react-router').RouterState;

export type RootState = {
  router: RouterState;
};

// TODO : not use as any when combining real reducers
export const rootReducer = combineReducers<RootState>({} as any);

export const initState = (): Partial<RootState> => {
  return {};
};
