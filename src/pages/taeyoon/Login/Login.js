import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/reset.scss";
import "./Login.scss";

const LoginForm = () => {
  const navigate = useNavigate();
  const [inputValues, setInput] = useState({
    id: "",
    pw: "",
  });
  const { id, pw } = inputValues;

  const isId = id.includes("@");
  const isPw = pw.length >= 5;
  const isIdPw = isId && isPw;
  const isdisabled = isIdPw ? false : true;

  const checkInput = e => {
    const { name, value } = e.target;

    setInput({
      ...inputValues, //[id, pw]
      [name]: value,
    });
  };

  return (
    <form className="login__form">
      <input
        onChange={checkInput}
        className="login__form--input input__id"
        name="id"
        value={id}
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        required
      />
      <input
        onChange={checkInput}
        className="login__form--input input__pw"
        name="pw"
        value={pw}
        type="password"
        placeholder="비밀번호"
        required
      />
      <button
        onClick={() => {
          navigate("/main-taeyoon");
        }}
        className="login__form--btn"
        type="submit"
        disabled={isdisabled}
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
