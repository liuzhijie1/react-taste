import { render } from '@testing-library/react';
import React from 'react'
import ReactDOM from 'react-dom'

let memoizedStates = []       // 全局变量
let index = 0;

function MyUseState(initialState) {
  memoizedStates[index] = memoizedStates[index] || initialState;
  let currentIndex = index; 
  // 改变状态的回调函数
  function setState(newState) {
    memoizedStates[currentIndex] = newState;  //  最新赋值
    render();    // 重绘视图
  }

  return [memoizedStates[index++], setState];   //  返回变量和更新变量的函数
}

const App5 = () => {
  const [count, setCount] = MyUseState(0);
  const [color, setColor] = MyUseState('blue');
  const [type, setType] = MyUseState('LV');

  function all() {
    setCount(10);
    setColor('red');
    setType('Nike')
  }

  return (
    <>
      <p>我的钱包: {count}</p>
      <p>我的钱包颜色: {color}</p>
      <p>我的钱包品牌: {type}</p>
      <button onClick={all}>点击</button>
    </>
  )
}

function render() {
  index = 0;
  ReactDOM.render(<App5 />, document.getElementById('root'));
}

render();