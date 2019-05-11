import * as React from 'react';

export interface CounterProps {
  count: number;
}

const Counter: React.FC<CounterProps> = props => (
  <div>
    heyguys
    {props.count}
  </div>
);

export default Counter;
