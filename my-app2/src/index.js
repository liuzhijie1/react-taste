import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './Demo4'
import Demo5 from './Demo5'
import Demo6 from './Demo6'
import Demo7 from './Demo7'
import Demo12 from './Demo12'
import Demo13 from './Demo13'
import Demo14 from './Demo14'
import Demo15 from './Demo15'

const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">demo1</Link>
        </li>
        <li>
          <Link to="/demo2">demo2</Link>
        </li>
        <li>
          <Link to="/demo3">demo3</Link>
        </li>
        <li>
          <Link to="/demo4">demo4</Link>
        </li>
        <li>
          <Link to="/demo5">demo5</Link>
        </li>
        <li>
          <Link to="/demo6">demo6</Link>
        </li>
        <li>
          <Link to="/demo7">demo7</Link>
        </li>
        <li>
          <Link to="/demo12">demo12</Link>
        </li>
        <li>
          <Link to="/demo13">demo13</Link>
        </li>
        <li>
          <Link to="/demo14">demo14</Link>
        </li>
        <li>
          <Link to="/demo15">demo15</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Demo1></Demo1>
        </Route>
        <Route path="/demo2">
          <Demo2></Demo2>
        </Route>
        <Route path="/demo3">
          <Demo3></Demo3>
        </Route>
        <Route path="/demo4">
          <Demo4></Demo4>
        </Route>
        <Route path="/demo5">
          <Demo5></Demo5>
        </Route>
        <Route path="/demo6">
          <Demo6></Demo6>
        </Route>
        <Route path="/demo7">
          <Demo7></Demo7>
        </Route>
        <Route path="/demo12">
          <Demo12></Demo12>
        </Route>
        <Route path="/demo13">
          <Demo13></Demo13>
        </Route>
        <Route path="/demo14">
          <Demo14></Demo14>
        </Route>
        <Route path="/demo15">
          <Demo15></Demo15>
        </Route>
      </Switch>
    </Router>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
