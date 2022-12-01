import React, { useState } from "react";
import Comment from "./Comment";

const Feed = props => {
  console.log(props);
  const userID = "ameliee_108";
  const [getComment, setGetComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [feedList, setFeedList] = useState([]);

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
    <section className="feeds">
      <nav>
        <div className="profile">
          <img src={props.profile_url} alt="feedProfile" width="30px" />
          <div>{props.userID}</div>
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
        <img src={props.feed_url} width="450px" alt="sky" />
      </figure>
      <section className="feed">
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
          <img src={props.like_url} alt="tomato stew" width="24px" />
          <span>{props.like_userID}</span>
          <span>님 외 16명이 좋아합니다</span>
        </div>
        <div className="feedComment">
          <span>{props.userID}</span>
          <span>{props.feed_msg}</span>
          <span>더 보기</span>
        </div>
        <ul className="commentList">
          <li>
            <div>
              <span>j{props.comment_userID}</span>
              <span>{props.comment}</span>
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
  );
};

export default Feed;
