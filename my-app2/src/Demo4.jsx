import React, { useState, useEffect } from 'react'

const Demo4 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    },1000);
    return () => {
      console.log('执行组件销毁回调函数');
      clearInterval(timer);
    }
  }, []);

  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

export default Demo4;