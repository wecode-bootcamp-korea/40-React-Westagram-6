import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./Main.scss";
import "../../../components/Nav/nav.scss";
import "../../../styles/taeyoon/user.scss";
import Comment from "./Comment";
library.add(fab, far, fas);

const Feed = props => {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");

  const onChange = e => {
    setComment(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const value = e.target[0].value;
    if (!value) {
      return alert("댓글을 입력하세요");
    }
    setCommentList([...commentList, value]);
    setComment("");
  };

  return (
    <article className="feed">
      {/* 피드 헤더 */}
      <section className="feed__header">
        <div className="feed__header--profile">
          <img
            className="profile_img"
            src="/images/taeyoon/profile.jpg"
            alt="프사"
            width="32px"
          />
          <span>{props.name}</span>
        </div>
        <div className="feed__header--icon">
          <FontAwesomeIcon
            className="fontAwesome"
            icon="fa-solid fa-ellipsis"
          />
        </div>
      </section>

      {/* 피드 이미지 */}
      <section className="feed__img">
        <img src={props.image} alt="이미지" width="470px" />
      </section>

      {/* 피드 아이콘 */}
      <section className="feed__icon">
        <div className="feed__icon--left">
          <FontAwesomeIcon
            className="icon__left fontAwesome"
            icon="fa-regular fa-heart"
            size="lg"
          />
          <FontAwesomeIcon
            className="icon__left fontAwesome"
            icon="fa-regular fa-comment"
            size="lg"
          />
          <FontAwesomeIcon
            className="icon__left fontAwesome"
            icon="fa-solid fa-arrow-up-from-bracket"
            size="lg"
          />
        </div>
        <div className="feed__icon--right">
          <FontAwesomeIcon
            className="icon__right fontAwesome"
            icon="fa-regular fa-bookmark"
            size="lg"
          />
        </div>
      </section>

      {/* 피드 좋아요 */}
      <section className="feed__like">
        <div className="feed__like--img">
          <img
            className="profile_img"
            src="/images/taeyoon/profile.jpg"
            alt="프사"
            width="20px"
          />
        </div>
        <div className="feed__like--text">
          ㅇㅇㅇ님 외 {props.likes}명이 좋아합니다
        </div>
      </section>

      {/* 피드 댓글 */}
      <section className="feed__comment">
        <ul className="feed__comment--list">
          {/* 댓글 리스트 */}
          {commentList.map((el, i) => {
            return <Comment key={i} userName="작성자" comment={el} />;
          })}
        </ul>
      </section>

      {/* 피드 작성시간 */}
      <section className="feed__time">{props.time}시간전</section>

      {/* 피드 댓글작성 */}
      <section className="feed__input" onSubmit={onSubmit}>
        <form className="feed\__input--form">
          <input
            onChange={onChange}
            value={comment}
            type="text"
            placeholder="댓글 달기..."
          />
          <button type="submit">게시</button>
        </form>
      </section>
    </article>
  );
};

export default Feed;
