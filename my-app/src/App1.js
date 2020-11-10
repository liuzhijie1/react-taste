import React, { useState } from "react";
import ReactDOM from "react-dom";

const App1 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Nick");
  const [work, setWork] = useState("前端工程师");

  return (
    <div>
      <p>我的工作年限: {name}</p>
      <p>我的名字: {work}</p>
      <p>我的工作: {count}</p>
      <button onClick={() => setCount(count+1)}>add</button>
    </div>
  );
};

export default App1;
