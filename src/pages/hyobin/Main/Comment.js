import { React, useState } from "react";
const FeedCommentList = props => {
  const [heartColor, setHeartColor] = useState(
    "../../images/hyobin/heart_default.png"
  );
  const like = e => {
    if (e) {
      setHeartColor("../../images/hyobin/heart_like.png");
    }
  };

  return (
    <li className="listAlign">
      <div>
        <span className="userIdStyle">{props.userID}</span>
        <span>{props.comment}</span>
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
          onClick={() => props.delComment(props.index)}
        />
      </form>
    </li>
  );
};

export default FeedCommentList;
