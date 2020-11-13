import React, { createContext, useState } from 'react';

export const RootContext = new createContext();

export const RootProvider = (props) => {
  let [name, setMyname] = useState('');
  return (
    <RootContext.Provider value={{name, setMyname}}>
      {props.children}
    </RootContext.Provider>
  )
}

export const RootConsumer = RootContext.Consumer;