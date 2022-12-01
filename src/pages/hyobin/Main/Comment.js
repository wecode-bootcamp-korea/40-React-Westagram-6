import React, { useState } from "react";

const FeedCommentList = props => {
  const [heartColor, setHeartColor] = useState(
    "../../images/hyobin/heart_default.png"
  );
  const { userID, comment, index, delComment } = props;

  const like = e => {
    if (e && heartColor === "../../images/hyobin/heart_default.png") {
      setHeartColor("../../images/hyobin/heart_like.png");
    } else {
      setHeartColor("../../images/hyobin/heart_default.png");
    }
  };

  return (
    <li className="listAlign">
      <div>
        <span className="userIdStyle">{userID}</span>
        <span>{comment}</span>
      </div>
      <form>
        <img
          src={heartColor}
          alt="like"
          width="15px"
          height="15px"
          onClick={like}
        />
        <img
          src="../../images/hyobin/delete.png"
          alt="delete"
          width="10px"
          onClick={() => delComment(index)}
        />
      </form>
    </li>
  );
};

export default FeedCommentList;
