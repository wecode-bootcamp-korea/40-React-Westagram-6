import React, { useState } from "react";
import "./Main.scss";
import "../../../styles/taeyoon/nav.scss";
import "../../../styles/taeyoon/user.scss";

const Feed = () => {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");

  console.log("comment : ", comment);
  console.log("commentList : ", commentList);

  const onChange = e => {
    console.log("eventValue : ", e.target.value);
    // e.preventDefault();
    setComment(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const value = e.target[0].value;
    setCommentList([...commentList, value]);
    setComment("");
  };

  const deleteComment = e => {
    const deleteBtn = e.target.parentElement;
    console.log(e.target.parentElement);
    deleteBtn.remove();
  };

  const Comment = commentList.map((el, i) => {
    return (
      <li key={i}>
        <span>작성자</span>
        <span>{el}</span>
        <span />
        <button onClick={deleteComment} className="delete_comment">
          ❌
        </button>
      </li>
    );
  });

  return (
    <div className="main__left">
      <article className="feed">
        {/* 피드 헤더 */}
        <div className="feed__header">
          <div className="feed__header--profile">
            <img
              className="profile_img"
              src="/images/taeyoon/profile.jpg"
              alt="프사"
              width="32px"
            />
            <span>Taeyoon</span>
          </div>
          <div className="feed__header--icon">
            {/* <FontAwesomeIcon icon="fa-solid fa-ellipsis" /> */}
          </div>
        </div>

        {/* 피드 이미지 */}
        <div className="feed__img">
          <img src="/images/taeyoon/dog.jpg" alt="이미지" width="470px" />
        </div>

        {/* 피드 아이콘 */}
        <div className="feed__icon">
          <div className="feed__icon--left">
            {/* <FontAwesomeIcon
          classNameName="icon__left"
          icon="fa-regular fa-heart"
          size="lg"
        />
        <FontAwesomeIcon
          classNameName="icon__left"
          icon="fa-regular fa-comment"
          size="lg"
        />
        <FontAwesomeIcon
          classNameName="icon__left"
          icon="fa-solid fa-arrow-up-from-bracket"
          size="lg"
        /> */}
          </div>
          <div className="feed__icon--right">
            {/* <FontAwesomeIcon
          classNameName="icon__right"
          icon="fa-regular fa-bookmark"
          size="lg"
        /> */}
          </div>
        </div>

        {/* 피드 좋아요 */}
        <div className="feed__like">
          <div className="feed__like--img">
            <img
              className="profile_img"
              src="/images/taeyoon/profile.jpg"
              alt="프사"
              width="20px"
            />
          </div>
          <div className="feed__like--text">ㅇㅇㅇ님 외 10명이 좋아합니다</div>
        </div>

        {/* 피드 댓글 */}
        <div className="feed__comment">
          <ul className="feed__comment--list">
            {/* 자바스크립트에서 추가될 공간 */}
            {Comment}
          </ul>
        </div>

        {/* 피드 작성시간 */}
        <div className="feed__time">1시간전</div>

        {/* 피드 댓글작성 */}
        <div className="feed__input" onSubmit={onSubmit}>
          <form className="feed__input--form">
            <input
              onChange={onChange}
              value={comment}
              type="text"
              placeholder="댓글 달기..."
            />
            <button type="submit">게시</button>
          </form>
        </div>
      </article>
    </div>
  );
};

export default Feed;
