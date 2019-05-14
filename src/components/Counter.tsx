import * as React from 'react';

export interface CounterProps {
  count: number;
  decrement: () => void;
  increment: () => void;
}

const isDecrementable = (count: number): boolean => {
  return count > 0;
};

const Counter: React.FC<CounterProps> = props => {
  return (
    <div>
      heyguys
      {props.count}
      <button onClick={() => props.increment()}>increment</button>
      <button
        onClick={() => {
          if (isDecrementable(props.count)) {
            props.decrement();
          }
        }}
      >
        decrement
      </button>
    </div>
  );
};

export default Counter;
