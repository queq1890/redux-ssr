export enum CounterActionType {
  DECREMENT = 'COUNTER_DECREMENT',
  INCREMENT = 'COUNTER_INCREMENT',
}

export interface CounterAction {
  type: CounterActionType;
  count?: number;
}

export const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT,
});

export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT,
});
