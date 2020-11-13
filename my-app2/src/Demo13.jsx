import React, { useState, useEffect, createContext, useContext } from 'react';

const DemoContext = createContext();

const Child = () => {
  const { count, count2, setCount, setCount2 } = useContext(DemoContext);

  console.log(Date.now());

  useEffect(() => {
    console.log('count', count);
    console.log('count2', count2);
  }, [count,count2]);

  return (
    <button onClick={() => {setCount(1); setCount2(1)}}>
      点我增加 {count}  -- {count2}
    </button>
  );
}

const Demo13 = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <DemoContext.Provider value={{count, setCount, count2, setCount2}}>
        <Child />
      </DemoContext.Provider>
    </div>
  )
}

export default Demo13;