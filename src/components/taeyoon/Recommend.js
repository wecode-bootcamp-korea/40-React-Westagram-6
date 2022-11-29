import React from "react";
import { Link } from "react-router-dom";

const Recommend = () => {
  return (
    <li className="user__container">
      <div className="user__left">
        <div className="user__img">
          <img
            className="profile_img"
            src="/images/taeyoon/profile.jpg"
            alt="프사"
            width="32px"
          />
        </div>
        <div className="user__info">
          <div className="user__info--name">wecode_bootcamp</div>
          <div className="user__info--text">Wecode | 위코드</div>
        </div>
      </div>
      <div className="user__right">
        <Link to="#">팔로우</Link>
      </div>
    </li>
  );
};

export default Recommend;
