import React from 'react';
import { increment, decrement } from '../store/slices/counterSlice';
import { useAppSelector, useAppDispatch } from '../store/hooks';

const Counter: React.FC = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+ More</button>
      <button onClick={() => dispatch(decrement())}>- Less</button>
    </div>
  );
};

export default Counter;

