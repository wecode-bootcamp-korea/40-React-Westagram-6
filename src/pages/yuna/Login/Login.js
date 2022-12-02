import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//useState 선언
import "../Login/Login.scss";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  //useState 뒤에 값은 초기값으로, id를 쓰는 input에는 초기에 아무것도 없기 때문에 빈 문자열을 반환
  //setId 값은 첫 번째 요소인 상태값을 업데이트 하는 함수
  //배열 안에 두개의 변수를 선언하고, useState를 호출한 뒤 반환값을 할당
  //useState 선언법
  const navigate = useNavigate();
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

        <button
          onClick={() => {
            fetch("http://10.58.52.240:8000/auth/signin", {
              method: "POST",
              headers: { "content-Type": "application/json;charset=utf-8" },
              body: JSON.stringify({
                email: id,
                password: pw,
              }),
            })
              .then(res => res.json())
              .then(data => {
                if (data.accessToken) {
                  localStorage.setItem("token", data.accessToken);

                  alert("환영합니다!");
                  navigate("/main-yuna");
                } else if (data.message === "specified user does not exist") {
                  alert("존재하지 않는 유저입니다.");
                }
              });
          }}
          class={goMain ? "loginBtn2" : "loginBtn"}
          disabled={goMain2}
        >
          {/* goMain(id input값에 @포함하고 pw input값의 길이가 5 이상이면) disabled(버튼비활성화) 를 goMain2(goMain이 true면 비활성화를 false하고 false면 비활성화를  true하라) */}
          로그인
        </button>

        <button
          onClick={() => {
            fetch("http://10.58.52.240:8000/auth/signup", {
              method: "POST",
              headers: { "content-Type": "application/json;charset=utf-8" },
              body: JSON.stringify({
                email: id,
                password: pw,
              }),
            });

            // navigate("/main-yuna");
          }}
          class={goMain ? "loginBtn2" : "loginBtn"}
          disabled={goMain2}
        >
          {/* goMain(id input값에 @포함하고 pw input값의 길이가 5 이상이면) disabled(버튼비활성화) 를 goMain2(goMain이 true면 비활성화를 false하고 false면 비활성화를  true하라) */}
          회원가입
        </button>

        <a className="pwLost" href="www.naver.com">
          비밀번호를 잊으셨나요??
        </a>
      </div>
    </header>
  );
};

export default Login;
