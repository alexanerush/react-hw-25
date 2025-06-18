import React from 'react';
import { increment, decrement } from '../store/slices/counterSlice';
import { useAppSelector, useAppDispatch } from '../store/hooks';

const Counter: React.FC = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Счётчик: {count}</h2>
      <button onClick={() => dispatch(increment())}>+ Увеличить</button>
      <button onClick={() => dispatch(decrement())}>- Уменьшить</button>
    </div>
  );
};

export default Counter;

