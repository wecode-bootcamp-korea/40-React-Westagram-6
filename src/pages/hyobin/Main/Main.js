import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <nav className="navBar">
        <div className="logo">
          <a href="/main-hyobin">
            <img
              className="img"
              src="../../images/hyobin/instagram.png"
              alt="westaLogo"
              width="24px"
            />
          </a>
          <a href="/main-hyobin" className="txt">
            Westagram
          </a>
        </div>
        <input className="searchBox" type="text" placeholder="🔍검색" />
        <div>
          <span className="etc">
            <img
              className="items"
              src="../../images/hyobin/explore.png"
              alt="navExplore"
            />
          </span>
          <span className="etc">
            <img
              className="items"
              src="../../images/hyobin/heart.png"
              alt="navHeart"
            />
          </span>
          <span className="etc">
            <img
              className="items"
              src="../../images/hyobin/profile.png"
              alt="navProfile"
            />
          </span>
        </div>
      </nav>
      <main>
        <section className="feeds">
          <nav className="nav">
            <div className="profile">
              <img
                className="mainProfile"
                src="../../images/hyobin/profile_cafe.jpeg"
                alt="feedProfile"
                width="30px"
              />
              <div className="profileTxt">ameliee_108</div>
            </div>
            <div>
              <img
                className="option"
                src="../../images/hyobin/option.png"
                alt="option"
                width="15px"
              />
            </div>
          </nav>
          <figure className="feedImg">
            <img src="../../images/hyobin/sky.jpeg" width="450px" alt="sky" />
          </figure>
          <div className="feedEtc">
            <div className="feedIcons">
              <div className="left">
                <img
                  className="icons"
                  src="../../images/hyobin/heart.png"
                  alt="hearticon"
                  width="24px"
                />
                <img
                  className="icons"
                  src="../../images/hyobin/chat.png"
                  alt="chaticons"
                  width="21px"
                />
                <img
                  className="icons"
                  src="../../images/hyobin/share.png"
                  alt="shareicon"
                  width="21px"
                />
              </div>
              <div className="right">
                <img
                  src="../../images/hyobin/bookmark.png"
                  alt="bookmark"
                  width="22px"
                />
              </div>
            </div>
            <div className="likeMsg marginLeft">
              <img
                className="likeProfile"
                src="../../images/hyobin/tomato_stew.jpeg"
                alt="tomato stew"
                width="24px"
              />
              <span className="profileTxt likeSum">
                tomatoLover 님 외 16명이 좋아합니다
              </span>
            </div>
            <div className=" feedInfo marginLeft">
              <sapn className="profileTxt">ameliee_108</sapn> 뚝섬 하늘은 ...
              <span className="lightTxt">더 보기</span>
            </div>
            <ul className="commentList txt ulAlign marginLeft">
              <li className="listAlign">
                <div>
                  <span className="userID">jjin1006 </span>
                  <span>머야머야~ 누구랑 갔어~?</span>
                </div>
                <img
                  src="../../images/hyobin/heart.png"
                  alt="like"
                  width="13px"
                  height="13px"
                />
              </li>
            </ul>
            <div className="txt lightTxt marginLeft dayBefore">1일 전</div>
          </div>
          <div className="feedEnd marginLeft">
            <input
              className="txt lightTxt commentStyle comment"
              type="text"
              placeholder="댓글 달기..."
            />
            <button className="txt commentStyle post" type="button" disabled>
              게시
            </button>
          </div>
        </section>

        <aside className="side">
          <header className="sideHeader">
            <img
              className="myProfile"
              src="../../images/hyobin/profile_cafe.jpeg"
              alt="sideProfile"
              width="45px"
            />
            <span>
              <div className="txt">ameliee_108</div>
              <div className="txt lightTxt">라빈쓰 얼렁뚱땅 인생살이</div>
            </span>
          </header>
          <section className="storySection sideSection">
            <div className="storyTxt">
              <span className="">스토리</span>
              <span className="txt">모두 보기</span>
            </div>
            <ul className="storyList storyMargin">
              <li className="story">
                <div className="gradientCircle" />
                <img
                  className="storyProfile"
                  src="../../images/hyobin/noodle.jpeg"
                  alt="yumyum_yumProfile"
                  width="26px"
                />
                <span>
                  <div className="txt">yumyum_yum</div>
                  <div className="txt lightTxt">15분 전</div>
                </span>
              </li>
              <li className="story">
                <img
                  className="storyProfile"
                  src="../../images/hyobin/sushi.jpeg"
                  alt="red_duckProfile"
                  width="26px"
                />
                <span>
                  <div className="txt">red_duck</div>
                  <div className="txt lightTxt">1시간 전</div>
                </span>
              </li>
              <li className="story">
                <img
                  className="storyProfile"
                  src="../../images/hyobin/profile_tennis.jpeg"
                  alt="yeeeeeri_01Profile"
                  width="26px"
                />
                <span>
                  <div className="txt">yeeeeeri_01</div>
                  <div className="txt lightTxt">17시간 전</div>
                </span>
              </li>
              <li className="story">
                <img
                  className="storyProfile"
                  src="../../images/hyobin/maple_tree.jpeg"
                  alt="jjjini333Profile"
                  height="26px"
                />
                <span>
                  <div className="txt">jjjini333</div>
                  <div className="txt lightTxt">20시간 전</div>
                </span>
              </li>
            </ul>
          </section>
          <section className="recommendSection sideSection">
            <div className="recommendFor">
              <span className="txt lightTxt">회원님을 위한 추천</span>
              <span className="txt">모두 보기</span>
            </div>
            <ul className="recommendList">
              <li className="recommendID">
                <img
                  className="recommendProfile"
                  src="../../images/hyobin/ginkgo.jpeg"
                  alt="kkkyeong222Profile"
                  width="26px"
                />
                <div className="IDtextBox">
                  <div className="recommendTxt txt">kkkyeong222</div>
                  <div className="recommendTxt txt hidden">
                    seung_a11님 외 10명이 팔로우하고 있습니다
                  </div>
                </div>
                <div className="blueBrTxt">팔로우</div>
              </li>
              <li className="recommendID">
                <img
                  className="recommendProfile"
                  src="../../images/hyobin/westaProfile1.jpeg"
                  alt="lovely_muuProfile"
                  width="26px"
                />
                <div className="IDtextBox">
                  <div className="recommendTxt txt">lovely_muu</div>
                  <div className="recommendTxt txt lightTxt hidden">
                    jiwon1010님 외 4명이 팔로우하고 있습니다
                  </div>
                </div>
                <div className="blueBrTxt">팔로우</div>
              </li>
              <li className="recommendID">
                <img
                  className="recommendProfile"
                  src="../../images/hyobin/westaProfile3.jpeg"
                  alt="goldyunProfile"
                  width="26px"
                />
                <div className="IDtextBox">
                  <div className="recommendTxt txt ">goldyun__</div>
                  <div className="recommendTxt txt hidden">
                    sunnyside_up0110님 외 14명이 팔로우하고 있습니다
                  </div>
                </div>
                <div className="blueBrTxt">팔로우</div>
              </li>
            </ul>
          </section>
          <section className="txt westaTxt">
            <div className="westaEtc">
              Westagram 정보 · 지원 · 홍보 센터 · API · 채용 정보 ·
              개인정보처리방침 · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어
            </div>
            <div className="westaCopy">ⓒ 2022 WESTAGRAM</div>
          </section>
        </aside>
      </main>
    </>
  );
};

export default Main;
