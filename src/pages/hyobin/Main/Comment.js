import { React } from "react";

const FeedCommentList = props => {
  return (
    <li className="listAlign">
      <div>
        <span className="userIdStyle">{props.userID}</span>
        <span>{props.comment}</span>
      </div>
      <form>
        <img
          src="../../images/hyobin/heart.png"
          alt="like"
          width="12px"
          height="12px"
        />
        <span onClick={props.delComment}>✕</span>
      </form>
    </li>
  );
};

export default FeedCommentList;
