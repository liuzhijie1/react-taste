import React, { createContext, useState } from 'react'

// 1. 使用createContext 创建上下文
export const RootContext = new createContext();


// 使用Hooks 的代码如此简洁
// export const RootProvider = (props) => {
//   let [name, setMyname] = useState('');
//   return (
//     <RootContext.Provider value={{ name, setMyname }}>
//       {props.children}
//     </RootContext.Provider>
//   );
// };

// 2. 创建provider
export class RootProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      handleMyName: this.handleMyName,
    }
  }

  handleMyName = (value) => {
    this.setState({
      name: value
    })
  }

  render() {
    return (
      <RootContext.Provider value={this.state}>
        {this.props.children}
      </RootContext.Provider>
    )
  }
}

// 3. 创建 Consumer
export const RootConsumer = RootContext.Consumer;



// 换一种方法
