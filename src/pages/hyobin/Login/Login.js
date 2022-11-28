import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main-hyobin");
  };

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [disabled, setDisable] = useState("");
  const [loginMsg, setLoginMsg] = useState("✅ ID 또는 비밀번호를 확인하세요");
  const [btnColor, setBtnColor] = useState("");

  const saveUserId = e => {
    setId(e.target.value);
    checkValid();
  };
  const saveUserPw = e => {
    setPw(e.target.value);
    checkValid();
  };

  const checkValid = () => {
    if (id.includes("@") && pw.length >= 5) {
      setDisable(false);
      setLoginMsg("✅");
      setBtnColor(1);
      console.log(true);
    } else {
      setDisable(true);
      setLoginMsg("✅ ID 또는 비밀번호를 확인하세요");
      setBtnColor(0.5);
      console.log(false);
    }
  };

  // console.log(id, ":", pw, ":", disabled, ":", loginMsg, ":", btnColor);

  return (
    <div className="login">
      <main className="section">
        <h1 className="title">Westagram</h1>

        <div className="box">
          <input
            type="text"
            className="item Id"
            onChange={saveUserId}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            type="password"
            className="item Pw"
            onChange={saveUserPw}
            placeholder="비밀번호"
          />
          <button
            type="button"
            className="btn"
            onClick={goToMain}
            disabled={disabled}
            style={{ opacity: btnColor }}
          >
            로그인
          </button>
          <p className="checkInput">{loginMsg}</p>
        </div>
        <footer className="lostPw">
          <p className="lostPw">비밀번호를 잊으셨나요?</p>
        </footer>
      </main>
    </div>
  );
};
export default Login;
