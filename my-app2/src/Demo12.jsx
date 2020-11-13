import React, { useState, useEffect, createContext, useContext } from "react";

const DemoContext = createContext();

const Child = () => {
  const { count, setCount } = useContext(DemoContext);
  console.log(Date.now());
  useEffect(() => {
    console.log("count", count);
  }, [count]);

  return <button onClick={() => setCount(1)}>点我增加 {count}</button>;
};

const Demo12 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <DemoContext.Provider value={{count, setCount}}>
        <Child />
      </DemoContext.Provider>
    </div>
  )
}

export default Demo12