import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import Welcome from "./Welcome";
import * as serviceWorker from "./serviceWorker";
import a, { b } from "./test";
import App1 from './App1'
import App2 from './component/App2'
import App3 from './component/App3'
import App4 from './component/App4'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>我是工作年限: {count}</p>
      <button onClick={() => setCount(count+1)}>add</button>
    </div>
  );
};

// setCount 可接收函数、表达式、纯值等，如可以写成如下形式。
// 上面是表达式
// 这个是函数 相当于 prevState,,   还可以是 纯值哦
// <button onClick={() => setCount((x) => x + 1)}>add</button>


ReactDOM.render(<App4 />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <Welcome name="World" />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
