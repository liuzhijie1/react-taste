import React from 'react';
import { RootConsumer, RootProvider } from './Demo9'

const Pannel = () => {
  <RootConsumer>
    {/* {不是用 useContext 需要调用 Consumer 包裹 children } */}
    {
      ({name, setMyname}) => (
        <div>
          <div>user: {name}</div>
          <input onChange={(e) => setMyname(e.target.value)} type="text"/>
        </div>
      )
    }
  </RootConsumer>
};

const App = () => {
  <div>
    <RootProvider>
      <Pannel></Pannel>
    </RootProvider>
  </div>
};

export default App;