import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, far, fas);

const Dropdown = () => {
  return (
    <div className="speech-bubble">
      <div className="speech-box">
        <FontAwesomeIcon
          className="fontAwesome"
          icon="fa-regular fa-id-badge"
          size="lg"
        />
        <span>프로필</span>
      </div>

      <div className="speech-box">
        <FontAwesomeIcon
          className="fontAwesome"
          icon="fa-regular fa-bookmark"
          size="lg"
        />
        <span>저장됨</span>
      </div>

      <div className="speech-box">
        <FontAwesomeIcon
          className="fontAwesome"
          icon="fa-solid fa-gear"
          size="lg"
        />
        <span>설정</span>
      </div>

      <div className="speech-box logout">
        <span>로그아웃</span>
      </div>
    </div>
  );
};
export default Dropdown;
