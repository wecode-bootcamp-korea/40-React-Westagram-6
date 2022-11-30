import React, { useState } from "react";
//useState 선언
import { Link } from "react-router-dom";
import "../Login/Login.scss";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  //useState 뒤에 값은 초기값으로, id를 쓰는 input에는 초기에 아무것도 없기 때문에 빈 문자열을 반환
  //setId 값은 첫 번째 요소인 상태값을 업데이트 하는 함수
  //배열 안에 두개의 변수를 선언하고, useState를 호출한 뒤 반환값을 할당
  //useState 선언법

  const goMain = id.includes("@") && pw.length >= 5;
  //if문을 3항 연산자로 변환한 것
  //.includes = array에 주어진 요소가 있는지 확인하는 메서드
  const goMain2 = goMain ? false : true;

  return (
    <header>
      <div className="loginMain">
        <h1 className="loginLogo">Westagram</h1>
        <input
          onChange={e => {
            setId(e.target.value);
          }}
          className="loginWrap"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onChange={e => {
            setPw(e.target.value);
          }}
          className="loginWrap"
          type="password"
          placeholder="비밀번호"
        />
        <Link to="/main-yuna">
          <button class={goMain ? "loginBtn2" : "loginBtn"} disabled={goMain2}>
            {/* goMain(id input값에 @포함하고 pw input값의 길이가 5 이상이면) disabled(버튼비활성화) 를 goMain2(goMain이 true면 비활성화를 false하고 false면 비활성화를  true하라) */}
            로그인
          </button>
        </Link>
        <a className="pwLost" href="www.naver.com">
          비밀번호를 잊으셨나요??
        </a>
      </div>
    </header>
  );
};

export default Login;
