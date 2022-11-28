import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Feed from "./Feed";
import Recommend from "../../../components/taeyoon/Recommend";
import Story from "../../../components/taeyoon/Story";
import Nav from "../../../components/taeyoon/Nav";
import "../../../styles/reset.scss";
import "./Main.scss";
import "../../../styles/taeyoon/nav.scss";
import "../../../styles/taeyoon/user.scss";
library.add(fab, far, fas);

const Main = () => {
  return (
    <>
      {/* 네비게이션 바 */}
      <Nav />
      {/* 메인화면 */}
      <main className="main">
        {/* 메인 왼쪽 피드 */}
        <Feed />

        {/* 메인 오른쪽 목록 */}
        <div className="main__right">
          {/* 오른쪽 프로필 */}
          <div className="main__right--profile">
            <div className="user__container" id="user__main">
              <div className="user__left">
                <div className="user__img">
                  <img
                    className="profile_img"
                    src="/images/taeyoon/profile.jpg"
                    alt="프사"
                    width="48px"
                  />
                </div>
                <div className="user__info">
                  <div className="user__info--name">wecode_bootcamp</div>
                  <div className="user__info--text">Wecode | 위코드</div>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽 스토리 */}
          <div className="main__right--story">
            <div className="story__header">
              <span className="story__header--left">스토리</span>
              <span className="story__header--right">모두 보기</span>
            </div>
            <div className="story__list">
              {/* 스토리 1 */}
              <Story name="name1" time="1분전" />

              {/* 스토리 2 */}
              <Story name="name2" time="2분전" />

              {/* 스토리 3 */}
              <Story name="name3" time="3분전" />

              {/* 스토리 4 */}
              <Story name="name4" time="4분전" />

              {/* 스토리 5 */}
              <Story name="name5" time="5분전" />
            </div>
          </div>

          {/* 오른쪽 추천리스트 */}
          <div className="main__right--recommend">
            <div className="recommend__header">
              <span className="recommend__header--left">
                회원님을 위한 추천
              </span>
              <span className="recommend__header--right">모두보기</span>
            </div>

            <div className="recommend__list">
              {/* 추천1 */}
              <Recommend />

              {/* 추천2 */}
              <Recommend />

              {/* 추천3 */}
              <Recommend />
            </div>
          </div>

          {/* 오른쪽 푸터 */}
          <div className="main__right--footer">
            <ul className="footer__list">
              <li>Instagram 정보 ·</li>
              <li>지원 ·</li>
              <li>홍보 센터 ·</li>
              <li>API ·</li>
              <li>채용 정보 ·</li>
              <li>개인정보처리방침 ·</li>
              <li>약관 ·</li>
              <li>디렉토리 ·</li>
              <li>프로필 ·</li>
              <li>해시태그 ·</li>
              <li>언어</li>
            </ul>
            <span>ⓒ 2022 INSTAGRAM</span>
          </div>
        </div>
      </main>

      {/* 프로필 컨테이너 */}
      {/* 
      <div className="user__container">
        <div className="user__left">
          <div className="user__img">
            src="/images/taeyoon/profile.jpg" alt="프사" width="32px" />
          </div>
          <div className="user__info">
            <div className="user__info--name">wecode_bootcamp</div>
            <div className="user__info--text">Wecode | 위코드</div>
          </div>
        </div>

        <div className="user__right">
          <a href="#">팔로우</a>
        </div>
      </div> */}

      {/* 검색창 */}
      <div className="speech-bubble">
        <div className="speech-box">
          <div className="user__container">
            <div className="user__left">
              <div className="user__img">
                <img
                  className="profile_img"
                  src="/images/taeyoon/profile.jpg"
                  alt="프사"
                  width="32px"
                />
              </div>
              <div className="user__info">
                <div className="user__info--name">wecode_bootcamp</div>
                <div className="user__info--text">Wecode | 위코드</div>
              </div>
            </div>

            <div className="user__right">
              <a href="#">팔로우</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
