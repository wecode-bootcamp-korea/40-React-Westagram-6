import React from "react";

const Recommend = () => {
  return (
    <div className="user__container">
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
        <a href="#">팔로우</a>
      </div>
    </div>
  );
};

export default Recommend;
