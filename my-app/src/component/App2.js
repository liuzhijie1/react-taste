import React, { useState } from "react";
import ReactDOM from "react-dom";

// 状态延迟初始化
// 相当于是对从父组件传过来的值，进行获取之后，在对其进行赋值
(props) => {
  const [value, setValue] = useState(function cb() {
    const result = parseFloat(props.value);
    return result;
  })
} 



const App2 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Nick");
  const [work, setWork] = useState("前端工程师");

  const changeAll = () => {
    setCount(2);
    setName("ChenNick");
    setWork("全栈工程师");
  };

  console.log("render");

  return (
    <div>
      <p>我的工作年限: {count}</p>
      <p>我的名字: {name}</p>
      <p>我的工作: {work}</p>
      <button onClick={changeAll}>同时修改三个状态</button>
    </div>
  );
};

export default App2