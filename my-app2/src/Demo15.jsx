import React, { useState } from 'react';

const loginPromise = ({ username, password}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username == 'test' && password == '123') {
        resolve('登录成功')
      } else {
        reject('账户信息错误')
      }
    }, 2000)
  })
}

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  // 登录点击事件
  const login = () => {
    setError('');
    loginPromise({username, password}).then((res) => {
      setIsLogin(true);
    }).catch((err) => {
      setError(err);
      setUsername('');
      setPassword('');
    })
  }

  return (
    <div>
      <p>登录信息: {isLogin ? '登录成功' : ''}</p>
      <p>失败信息: {error}</p>
      <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => login() }>登录</button>
    </div>
  )
}

export default LoginPage;