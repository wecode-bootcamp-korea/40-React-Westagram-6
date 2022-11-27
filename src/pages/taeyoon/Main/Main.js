import React, { useState } from "react";
import "../../../styles/reset.scss";
import "./Main.scss";
import "../../../styles/taeyoon/nav.scss";
import "../../../styles/taeyoon/user.scss";
import "./Feed";
import Feed from "./Feed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, far, fas);

const Main = () => {
  return (
    <>
      {/* 네비게이션 바 */}
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__left">
            <a className="nav__left--icon" href="#">
              <FontAwesomeIcon
                className="fontAwesome"
                icon="fa-brands fa-instagram"
                size="2x"
              />
            </a>
            <a className="nav__left--logo" href="#">
              Westagram
            </a>
          </div>
          <div className="nav__search">
            <input type="text" placeholder="🔍검색1" />
          </div>

          <div className="nav__right">
            <a href="#">
              <FontAwesomeIcon
                className="fontAwesome"
                icon="fa-regular fa-compass"
                size="2x"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="fontAwesome"
                icon="fa-regular fa-heart"
                size="2x"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                className="fontAwesome"
                icon="fa-regular fa-user"
                size="2x"
              />
            </a>
            {/* 프로필 정보 */}
            <div className="nav__popup">
              <div className="speech-bubble">
                <div className="speech-box">
                  <FontAwesomeIcon
                    className="fontAwesome"
                    icon="fa-regular fa-id-badge"
                    size="lg"
                  />
                  <span>프로필</span>
                </div>

                <div className="speech-box">
                  <FontAwesomeIcon
                    className="fontAwesome"
                    icon="fa-regular fa-bookmark"
                    size="lg"
                  />
                  <span>저장됨</span>
                </div>

                <div className="speech-box">
                  <FontAwesomeIcon
                    className="fontAwesome"
                    icon="fa-solid fa-gear"
                    size="lg"
                  />
                  <span>설정</span>
                </div>

                <div className="speech-box logout">
                  <span>로그아웃</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
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
                    <div className="user__info--name">name1</div>
                    <div className="user__info--text">1분전</div>
                  </div>
                </div>
              </div>

              {/* 스토리 2 */}
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
                    <div className="user__info--name">name2</div>
                    <div className="user__info--text">2분전</div>
                  </div>
                </div>
              </div>

              {/* 스토리 3 */}
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
                    <div className="user__info--name">name3</div>
                    <div className="user__info--text">3분전</div>
                  </div>
                </div>
              </div>

              {/* 스토리 4 */}
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
                    <div className="user__info--name">name4</div>
                    <div className="user__info--text">4분전</div>
                  </div>
                </div>
              </div>

              {/* 스토리 5 */}
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
                    <div className="user__info--name">name5</div>
                    <div className="user__info--text">text5</div>
                  </div>
                </div>
              </div>
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

              {/* 추천2 */}
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

              {/* 추천3 */}
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
