import React, { useReducer } from "react";

// 模拟登录接口2秒钟返回
const loginPromise = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username == "test" && password == "123") {
        resolve("登录成功");
      } else {
        reject("账户信息错误");
      }
    }, 2000);
  });
};

const initState = {
  loading: false,
  username: "",
  password: "",
  error: "",
  isLogin: false,
};

function loginReducer(state, action) {
  switch (action.type) {
    case "username":
      return {
        ...state,
        username: action.payload.username,
      };
    case "password":
      return {
        ...state,
        password: action.payload.password,
      };
    case "login":
      return {
        ...state,
        loading: true,
        error: "",
      };
    case "success":
      return {
        ...state,
        isLogin: true,
        loading: false,
      };
    case "error":
      return {
        ...state,
        error: action.payload.error,
        username: "",
        password: "",
        loading: false,
      };
    default:
      return state;
  }
}

const LoginPage = () => {
  const [state, dispatch] = useReducer(loginReducer, initState);
  const { username, password, loading, error, isLogin } = state;

  // 登录点击事件
  const login = () => {
    dispatch({ type: login });
    loginPromise({ username, password })
      .then((res) => {
        dispatch({ type: "success" });
      })
      .catch((err) => {
        dispatch({ type: "error", payload: { error: err } });
      });
  };

  return (
    <div>
      <p>登录信息: {isLogin ? "登录成功" : ""}</p>
      <p>失败信息: {error}</p>
      <input type="text" name="username" onChange={(e) => dispatch({ type: 'username', payload: {username: e.target.value}}) } />
      <input type="password" name="password" onChange={(e) => dispatch({ type: 'password', payload: {password: e.target.value} })} />
      <button onClick={() => login()}>登录</button>
    </div>
  );
};

export default LoginPage;
