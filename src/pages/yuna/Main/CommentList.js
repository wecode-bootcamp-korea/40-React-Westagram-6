import React from "react";
import "../Main/CommentList.scss";

const CommentList = props => {
  return (
    <div className="userCommentBox">
      <p className="userName">{props.userName}</p>
      <div className="userComment">{props.userComment}</div>

      <img
        className="userHeartImg"
        src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
      />
    </div>
  );
};

export default CommentList;
