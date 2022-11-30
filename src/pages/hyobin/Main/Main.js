import { React, useState } from "react";
import "./Main.scss";
import Comment from "./Comment.js";

const Main = () => {
  const userID = "ameliee_108";
  const [getComment, setGetComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const saveComment = e => {
    setGetComment(e.target.value);
  };
  // getComment 와 userId를 객체로 넣어주기 -> 해당 객체를 배열로 commentLis에 포함
  const postComment = () => {
    const newCommentArr = [...commentList];
    newCommentArr.push(getComment);
    setCommentList(newCommentArr);
    setGetComment("");
  };
  const delComment = e => {
    setCommentList(commentList => {
      return commentList.filter((_, index) => index !== e);
    });
  };

  const keyEnter = e => {
    if (getComment && e.key === "Enter") {
      postComment();
    }
  };

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
            <img src="../../images/hyobin/heart.png" alt="navHeart" />
          </span>
          <span>
            <img src="../../images/hyobin/profile.png" alt="navProfile" />
          </span>
        </div>
      </nav>
      <main>
        <section className="feeds">
          <nav>
            <div className="profile">
              <img
                src="../../images/hyobin/profile_cafe.jpeg"
                alt="feedProfile"
                width="30px"
              />
              <div>ameliee_108</div>
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
          <figure>
            <img src="../../images/hyobin/sky.jpeg" width="450px" alt="sky" />
          </figure>
          <section className="feedEtc">
            <div className="feedIcons">
              <div className="leftSide">
                <img
                  src="../../images/hyobin/navHeart.png"
                  alt="hearticon"
                  width="24px"
                />
                <img
                  src="../../images/hyobin/chat.png"
                  alt="chaticons"
                  width="21px"
                />
                <img
                  src="../../images/hyobin/share.png"
                  alt="shareicon"
                  width="21px"
                />
              </div>
              <div className="rightSide">
                <img
                  src="../../images/hyobin/bookmark.png"
                  alt="bookmark"
                  width="22px"
                />
              </div>
            </div>
            <div className="likeMsg">
              <img
                src="../../images/hyobin/tomato_stew.jpeg"
                alt="tomato stew"
                width="24px"
              />
              <span className="userIdStyle">tomatoLover</span>
              <span>님 외 16명이 좋아합니다</span>
            </div>
            <div className="feedComment">
              <span>ameliee_108</span> 뚝섬 하늘은 ❤️🧡💛💚💙💜 ...
              <span>더 보기</span>
            </div>
            <ul className="commentList">
              <li>
                <div>
                  <span>jjin1006</span>
                  <span>🌈🌈🌈</span>
                </div>
                <form>
                  <img
                    src="../../images/hyobin/heart_like.png"
                    alt="like"
                    width="15px"
                    height="15px"
                  />
                  <img
                    src="../../images/hyobin/delete.png"
                    alt="delete"
                    width="10px"
                  />
                </form>
              </li>
              {commentList.map((comment, index) => {
                return (
                  <Comment
                    userID={userID}
                    comment={comment}
                    key={index}
                    index={index}
                    delComment={delComment}
                  />
                );
              })}
              <div className="dayStyle">1일 전</div>
            </ul>
          </section>
          <div className="newComment">
            <input
              className="borderNone comment"
              type="text"
              value={getComment}
              onChange={saveComment}
              onKeyPress={keyEnter}
              placeholder="댓글 달기..."
            />
            <button
              className="borderNone post"
              type="button"
              onClick={postComment}
              style={getComment ? { opacity: 1 } : { opacity: 0.5 }}
              disabled={!getComment}
            >
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
          <section className="westaCopy">
            <div className="etc">
              Westagram 정보 · 지원 · 홍보 센터 · API · 채용 정보 ·
              개인정보처리방침 · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어
            </div>
            <div className="copy">ⓒ 2022 WESTAGRAM</div>
          </section>
        </aside>
      </main>
    </>
  );
};

export default Main;
