import React from "react";
import { Navigate } from "react-router-dom";
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

  const saveUserId = e => {
    setId(e.target.value);
  };

  const saveUserPw = e => {
    setPw(e.target.value);
  };
  /*
  2. setId/setPw 값 유효성 검사
    => id : @포함 5자 이상
    => pw : 5자 이상

  };
  3. id/pw false => 조건 red msg
  4. 둘다 true => goToMain
*/

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

          <button type="button" className="btn" onClick={goToMain}>
            로그인
          </button>
        </div>
        <footer className="lostPw">
          <p>비밀번호를 잊으셨나요?</p>
        </footer>
      </main>
    </div>
  );
};
export default Login;
