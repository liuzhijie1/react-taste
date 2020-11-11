import React, { useState, useEffect } from 'react'

const Demo7 = () => {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (count > 1) {
      setDisplay(true)
    }
  },[count])

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      {display ? <p>我是p标签</p> : null}
    </div>
  )
}

export default Demo7;