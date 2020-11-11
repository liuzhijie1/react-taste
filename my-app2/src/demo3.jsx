import React, { useState, useEffect } from "react";

const Children = (props) => {
  useEffect(() => {
    console.log("参数更新");
  }, [props.value]);
  return <div>{props.value}</div>;
};

const Demo3 = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <Children value={count}></Children>
      <button onClick={() => setCount((x) => x+1 )}>+1</button>
      <button onClick={() => setCount(1)}>+1</button>
    </div>
  )
}


export default Demo3