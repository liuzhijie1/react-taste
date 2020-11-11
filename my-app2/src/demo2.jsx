import React, { useState, useEffect } from 'react'

const Demo2 = () => {
  const [count, setCount] = useState(0);


  // useEffect 回调函数是异步执行的，并不会造成视图渲染的阻塞。这种模式有好处也有坏处，
  // 好处就是可以在回调函数内进行数据请求，返回之后渲染视图。
  // 坏处是当你想获取一些实时的信息如获取浏览器屏幕尺寸动态修改 CSS 等就会有问题  (这里需要注意)

  useEffect(() => {
    console.log(`useEffect 执行 count: ${count}`);
  }, [count])

  console.log(count);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>+1</button>
    </div>
  )
}

export default Demo2