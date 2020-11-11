import React, { useState, useEffect, useLayoutEffect } from 'react';

const Demo6 = () => {
  // 在useEffect 中会造成 闪屏的效果
  // useEffect(() => {
  //   console.log('useEffect');
  //   const countDom = document.getElementById('count');
  //   countDom.setAttribute(
  //     'style',
  //     'background: red; width: 100px; height: 100px; position: absolute; top: 100px; left: 200px'
  //   )
  // },[]);
   // useEffect 回调函数是异步执行的，并不会造成视图渲染的阻塞。这种模式有好处也有坏处，
  // 好处就是可以在回调函数内进行数据请求，返回之后渲染视图。
  // 坏处是当你想获取一些实时的信息如获取浏览器屏幕尺寸动态修改 CSS 等就会有问题  (这里需要注意)
  // 证明 useLayoutEffect 阻塞了浏览器的渲染，当执行完 DOM 操作的时候，首选 useLayoutEffect。
  // useEffect 不会阻塞浏览器的渲染，在渲染之后还是会渲染
  // useLayoutEffect 是会阻塞浏览器的渲染， 在返回之后才会进行渲染
  useEffect(() => {
    console.log('useEffect');
  },[]);
  useLayoutEffect(() => {
    const countDom = document.getElementById('count');
    countDom.setAttribute(
      'style',
      'background: red; width: 100px; height: 100px; position: absolute; top: 100px; left: 200px'
    )
    console.log('useLayoutEffect');
  },[]);

  return (
    <div>
      <p id="count">我是一个代码块</p>
    </div>
  )
}

export default Demo6