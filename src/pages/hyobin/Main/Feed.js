import React, { useState } from "react";
import Comment from "./Comment";

const Feed = props => {
  const userID = "ameliee_108";
  const [getComment, setGetComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const {
    profileUrl,
    userid,
    feedUrl,
    like_url,
    like_userID,
    feed_msg,
    comment_userID,
    comment,
  } = props;

  const saveComment = e => {
    setGetComment(e.target.value);
  };

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
          <img src={profileUrl} alt="feedProfile" width="30px" />
          <div>{userid}</div>
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
        <img src={feedUrl} width="450px" alt="sky" />
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
          <img src={like_url} alt="tomato stew" width="24px" />
          <span>{like_userID}</span>
          <span>님 외 16명이 좋아합니다</span>
        </div>
        <div className="feedComment">
          <span>{userid}</span>
          <span>{feed_msg}</span>
          <span>더 보기</span>
        </div>
        <ul className="commentList">
          <li>
            <div>
              <span>j{comment_userID}</span>
              <span>{comment}</span>
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
