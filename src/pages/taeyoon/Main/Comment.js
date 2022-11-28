import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
const Comment = props => {
  const { userName, comment } = props;

  const deleteComment = e => {
    const li = e.target.parentElement.parentElement;
    li.remove();
  };

  const toggleHeart = e => {
    // fontawesome svg태그 선택시 리턴
    if (e.target.nodeName === "svg") {
      return;
    }
    const heart = e.target;
    heart.classList.toggle("icon__red");
  };

  return (
    <li>
      <div>
        <span>{userName}</span>
        <span>{comment}</span>;
      </div>
      <div>
        <span>
          <FontAwesomeIcon
            onClick={toggleHeart}
            className="fontAwesome"
            icon="fa-solid fa-heart"
          />
        </span>
        <button onClick={deleteComment} className="delete_comment">
          ❌
        </button>
      </div>
    </li>
  );
};

export default Comment;
