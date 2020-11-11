import React, { useState, useEffect } from 'react';

const Demo5 = () => {
  const [color, setColor] = useState('blue');
  const [name, setName] = useState('Nick');

  // 只有在color 变化 的时候才会执行
  useEffect(() => {
    console.log('发现颜色变化， 我要做点事情');
  }, [color])

  // 这里就相当于监听所有属性，总是会执行
  useEffect(() => {
    console.log('我啥也没发现');    
  })

  // 这里只会在初始化的时候执行一次
  useEffect(() => {
    console.log('我发现了个寂寞');
  },[])

  // 只有在 name 变化 的时候才会执行
  useEffect(() => {
    console.log('发现名字变化之后， 我要做点事情');
  }, [name])

  //  2个中的其中一个发现了变化那么就会执行了
  useEffect(() => {
    console.log('我全部都发现了呢');
  },[name, color])

  return (
    <div>
      <p>color: {color}</p>
      <p>name: {name}</p>
      <button onClick={() => setColor('red')}>改变颜色</button>
      <button onClick={() => setName('Chen')}>改变名字</button>
    </div>
  )
}

export default Demo5;