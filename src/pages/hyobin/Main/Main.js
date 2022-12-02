import React, { useState, useEffect } from "react";
import Feed from "./Feed";
import Footer from "./Footer.js";
import "./Main.scss";

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch("/data/FeedData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

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
          <a href="/main-hyobin" className="textLogo">
            Westagram
          </a>
        </div>
        <input className="searchBox" type="text" placeholder="🔍검색" />
        <div className="etc">
          <span>
            <img src="../../images/hyobin/explore.png" alt="navExplore" />
          </span>
          <span>
            <img src="../../images/hyobin/navheart.png" alt="navHeart" />
          </span>
          <span>
            <img src="../../images/hyobin/profile.png" alt="navProfile" />
          </span>
        </div>
      </nav>
      <main>
        <div>
          {feedList.map(feed => {
            return (
              <Feed
                key={feed.id}
                profileUrl={feed.profile_url}
                userid={feed.userID}
                feedUrl={feed.feed_url}
                like_url={feed.like_url}
                like_userID={feed.like_userID}
                feed_msg={feed.feed_msg}
                comment_userID={feed.comment_userID}
                comment={feed.comment}
              />
            );
          })}
        </div>
        <aside className="side">
          <header className="sideHeader">
            <img
              className="myProfile"
              src="../../images/hyobin/profile_cafe.jpeg"
              alt="sideProfile"
              width="45px"
            />
            <span>
              <h1>ameliee_108</h1>
              <div>라빈쓰 얼렁뚱땅 인생살이</div>
            </span>
          </header>
          <section className="story">
            <div className="nav">
              <span>스토리</span>
              <span>모두 보기</span>
            </div>
            <ul className="storyList">
              <li>
                <img
                  src="../../images/hyobin/noodle.jpeg"
                  alt="yumyum_yumProfile"
                  width="26px"
                />
                <span>
                  <div>yumyum_yum</div>
                  <div>15분 전</div>
                </span>
              </li>
              <li>
                <img
                  src="../../images/hyobin/sushi.jpeg"
                  alt="red_duckProfile"
                  width="26px"
                />
                <span>
                  <div>red_duck</div>
                  <div>1시간 전</div>
                </span>
              </li>
              <li>
                <img
                  src="../../images/hyobin/profile_tennis.jpeg"
                  alt="yeeeeeri_01Profile"
                  width="26px"
                />
                <span>
                  <div>yeeeeeri_01</div>
                  <div>17시간 전</div>
                </span>
              </li>
              <li>
                <img
                  src="../../images/hyobin/maple_tree.jpeg"
                  alt="jjjini333Profile"
                  height="26px"
                />
                <span>
                  <div>jjjini333</div>
                  <div>20시간 전</div>
                </span>
              </li>
            </ul>
          </section>
          <section className="recommend">
            <div className="nav">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <ul className="recommendList">
              <li>
                <img
                  src="../../images/hyobin/ginkgo.jpeg"
                  alt="kkkyeong222Profile"
                  width="26px"
                />
                <div className="listEach">
                  <div>kkkyeong222</div>
                  <div>seung_a11님 외 10명이 팔로우하고 있습니다</div>
                </div>
                <div>팔로우</div>
              </li>
              <li>
                <img
                  src="../../images/hyobin/westaProfile1.jpeg"
                  alt="lovely_muuProfile"
                  width="26px"
                />
                <div className="listEach">
                  <div>lovely_muu</div>
                  <div>jiwon1010님 외 4명이 팔로우하고 있습니다</div>
                </div>
                <div>팔로우</div>
              </li>
              <li>
                <img
                  src="../../images/hyobin/westaProfile3.jpeg"
                  alt="goldyunProfile"
                  width="26px"
                />
                <div className="listEach">
                  <div>goldyun__</div>
                  <div>sunnyside_up0110님 외 14명이 팔로우하고 있습니다</div>
                </div>
                <div>팔로우</div>
              </li>
            </ul>
          </section>
          <footer className="westaCopy">
            <div className="etc">
              <Footer />
            </div>
            <div className="copy">ⓒ 2022 WESTAGRAM</div>
          </footer>
        </aside>
      </main>
    </>
  );
};

export default Main;
