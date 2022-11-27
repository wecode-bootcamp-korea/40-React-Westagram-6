import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
const Comment = props => {
  console.log(props);
  return (
    <li>
      <div>
        <span>{props.userName}</span>
        <span>{props.commentList}</span>;
      </div>
      <div>
        <span>
          <FontAwesomeIcon
            onClick={props.toggleHeart}
            className="fontAwesome"
            icon="fa-solid fa-heart"
          />
        </span>
        <button onClick={props.deleteComment} className="delete_comment">
          ❌
        </button>
      </div>
    </li>
  );
};

export default Comment;
