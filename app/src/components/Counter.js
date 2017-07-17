import React from 'react';
import './counter.scss';

export default function Counter({ value, onIncrement, onDecrement, ...props }) {
  return (
    <span {...props} className="counter">
      {value}
      <button className='btn btn-sm btn-default' onClick={onIncrement}>+</button>
      <button className='btn btn-sm btn-default' onClick={onDecrement}>-</button>
    </span>
  )
};
