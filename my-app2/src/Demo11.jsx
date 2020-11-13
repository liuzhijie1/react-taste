import React, { useContext } from 'react';
import { RootProvider, RootContext } from './Demo9';

const Pannel = () => {
  const { name, setMyname } = useContext(RootContext);
  return (
    <div>
      <div>user: {name}</div>
      <input onChange={ (e) => setMyname(e.target.value)} type="text"/>
    </div>
  )
}

const App = () => (
  <div>
    <RootProvider>
      <Pannel></Pannel>
    </RootProvider>
  </div>
)

export default App;
