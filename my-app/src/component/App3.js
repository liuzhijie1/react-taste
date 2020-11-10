import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "../App";

const App3 = () => {
  const [form, setForms] = useState({
    username: '',
    password: ''
  })

  const print = (e) => {
    e.preventDefault();
    console.log(form.username, form.password);
  }

  const updateForm = (e) => {
    setForms({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={print}>
      <div>
        <span>用户名: </span>
        <input value={form.username} name="username" type="text" onChange={updateForm} />
      </div>
      <div>
        <span>密码: </span>
        <input value={form.password} name="password" type="password" onChange={updateForm} />
      </div>
      <br />
      <button>提交</button>
    </form>
  )
}

export default App3;