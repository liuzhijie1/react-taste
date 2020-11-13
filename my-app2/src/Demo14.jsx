import React, { useReducer } from 'react';

function ReducerDemo() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "min":
        return state - 1;
      default:
        return state;
    }
  }, 0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'add' })}>加</button>
      <button onClick={() => dispatch({ type: 'min'})}>减</button>
    </div>
  )
}


export default ReducerDemo;