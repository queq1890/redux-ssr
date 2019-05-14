import { CounterAction, CounterActionType } from './actions';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0,
};

const CounterReducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
  switch (action.type) {
    case CounterActionType.DECREMENT:
      return { ...state, count: state.count - 1 };
    case CounterActionType.INCREMENT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export default CounterReducer;
