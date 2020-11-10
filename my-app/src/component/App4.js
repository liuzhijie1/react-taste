import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import App from '../App';

const App4 = () => {
  const [count, setCount] = useState(4);

  const handleClickDelay = () => {
    setTimeout(() => {
      setCount((count) => count + 1);
    },2000)
  }

  return (
    <div>
      <div>我的工作年限: {count}</div>
      <button onClick={handleClickDelay}>异步增加</button>
    </div>
  )
}

export default App4;