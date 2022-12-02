import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommentList from "./CommentList";
import "../Main/Main.scss";
import { FOOTER_LIST } from "./Footer";

const Main = () => {
  const [userInfoList, setUserInfoList] = useState([]);
  console.log(userInfoList);
  useEffect(() => {
    fetch("/data/feedData.json")
      .then(response => response.json())
      .then(result => setUserInfoList(result));
  }, []);

  let [userName] = useState("y_na__y");
  let [comment, setComment] = useState("");
  let [feedComments, setFeedComments] = useState([]);
  let [isValid, setIsValid] = useState(false);

  let post = e => {
    const copyFeedComments = [...feedComments];
    copyFeedComments.push(comment);
    setFeedComments(copyFeedComments);
    setComment("");
  };

  const handleOnClick = e => {
    const copyFeedComments = [...feedComments];
    copyFeedComments.push(comment);
    setFeedComments(copyFeedComments);
    setComment("");
  };

  const handleOnKeyPress = e => {
    if (e.key === "Enter") {
      handleOnClick();
    }
  };

  return (
    <div>
      <div className="nav">
        <div className="navMain">
          <div className="navMainImg">
            <Link to="/login-yuna">
              <img
                className="navImg"
                src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
                alt="인스타그램 로고이미지"
              />
            </Link>

            <p className="navLogo">Westagram</p>
          </div>

          <input className="navSearch" type="text" placeholder="🔍 검색" />
          <div className="navIcons">
            <img
              className="navIcon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="탐색이미지"
            />
            <img
              className="navIcon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="하트이미지"
            />
            <img
              className="navIcon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="마이페이지이미지"
            />
          </div>
        </div>
      </div>

      <div className="main">
        <div className="mainMainRight">
          <div className="article">
            <div className="artHeader">
              <div className="artHeaderProfile">
                <img
                  className="artHeaderImg"
                  src="images/yuna/93D63A2A-9DE0-49B1-9FE3-AAD17B97D292.JPG"
                  alt="게시물프로필"
                />
                <span className="artHeaderId">long_yuna_</span>
              </div>

              <img
                className="artHeaderIcon"
                src="https://cdn-icons-png.flaticon.com/512/512/512142.png"
                alt="더보기아이콘"
              />
            </div>
            <div className="artMain">
              <img
                className="artMainImg"
                src="images/yuna/19F50ED5-5118-471A-81AF-1E4F04E87C44.JPG"
                alt="게시물이미지"
              />
            </div>
            <div className="artFooter">
              <div className="artFooterIcons">
                <div className="artFooterFirstIcon">
                  <img
                    className="artFooterIcon"
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                    alt="좋아요이미지"
                  />
                  <img
                    className="artFooterIcon"
                    src="https://cdn-icons-png.flaticon.com/512/3114/3114810.png"
                    alt="말풍선이미지"
                  />
                  <img
                    className="artFooterIcon"
                    src="https://cdn-icons-png.flaticon.com/512/3097/3097412.png"
                    alt="업로드이미지"
                  />
                </div>
                <img
                  className="artFooterIcon"
                  src="https://cdn-icons-png.flaticon.com/512/25/25667.png"
                  alt="북마크이미지"
                />
              </div>
              <div className="artFooterGood">
                <img
                  className="artFooterGoodImg"
                  src="https://images.velog.io/images/hojin11choi/post/8af0e909-801c-4524-a62c-b83d02811ef7/wecode.png"
                  alt="위코드이미지"
                />
                <span>
                  <span className="artFooterPostId">Wecode</span>님{" "}
                  <span className="artFooterPostId">외 38,499명</span>이
                  좋아합니다
                </span>
              </div>
              <div className="artFooterPost">
                <span className="artFooterPostId">long_yuna_</span>
                <span className="artFooterPostMyPost">
                  무계획 오히려 좋아💙
                </span>
              </div>

              <ul className="artFooterComment">
                <li className="artFooterCommentId">
                  <span>
                    <span className="artFooterPostId">i_am_beetna</span> 뭐야?!
                    나는!!
                  </span>
                  <img
                    className="artFooterCommentIcoon"
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                    alt="좋아요이미지"
                  />
                </li>
              </ul>

              <span className="artFooterCommentTime">55분 전</span>

              {feedComments.map((commentArr, i) => {
                return (
                  <CommentList
                    userName={userName}
                    userComment={commentArr}
                    key={i}
                  />
                );
              })}

              <div className="artFooterCommentButton">
                <input
                  className="artFooterCommentText"
                  type="text"
                  placeholder="댓글달기..."
                  onChange={e => {
                    setComment(e.target.value);
                  }}
                  onKeyUp={e => {
                    e.target.value.length > 0
                      ? setIsValid(true)
                      : setIsValid(false);
                  }}
                  value={comment}
                  onKeyPress={handleOnKeyPress}
                />
                <button
                  className={
                    comment.length > 0
                      ? "artfooterCommentBtn2"
                      : "artfooterCommentBtn1"
                  }
                  onClick={post}
                  disabled={isValid ? false : true}
                >
                  게시
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="main-right">
          <div className="main-right-main">
            <ul className="main-right-footer">
              {FOOTER_LIST.map(footerList => {
                return <li key={footerList.id}>{footerList.footerName}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
