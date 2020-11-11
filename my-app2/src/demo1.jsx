import React, { Component } from 'react'

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }

  componentDidMount() {
    const { count } = this.state;
    console.log(`ComponentDidMount 执行, ${count}`);
  }

  componentDidUpdate() {
    const {count} = this.state;
    console.log(`ComponentDidUpdate 执行, ${count}`);
  }

  add = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>{ count }</p>
        <button onClick={this.add}>+1</button>
      </div>
    )
  }
}


// const demo1 = () => {
//   return <div>demo1</div>
// }

// export default demo1;