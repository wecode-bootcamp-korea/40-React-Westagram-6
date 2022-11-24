import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  let [inputIdValue, inputIdFunc] = useState("");
  let [inputPwValue, inputPwFunc] = useState("");

  return (
    <form className="login__form">
      <input
        onChange={e => inputIdFunc(e.target.value)}
        className="login__form--input input__id"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        required
      />
      {inputIdValue}
      <input
        onChange={e => inputPwFunc(e.target.value)}
        className="login__form--input input__pw"
        type="password"
        placeholder="비밀번호"
        required
      />
      {inputPwValue}

      <button
        onClick={() => {
          navigate("/main-taeyoon");
        }}
        className="login__form--btn"
        type="submit"
        // disabled
      >
        로그인
      </button>
    </form>
  );
};

const Login = () => {
  return (
    <div className="login__container">
      <title className="login__logo">Westagram</title>

      <LoginForm />

      <footer className="login__findpw">
        <a href="/main-taeyoon">비밀번호를 잊으셨나요?</a>
      </footer>
    </div>
  );
};

export default Login;
