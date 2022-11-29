import React from "react";

const Story = props => {
  const { name, time } = props;
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
          <div className="user__info--name">{name}</div>
          <div className="user__info--text">{time}</div>
        </div>
      </div>
    </li>
  );
};

export default Story;
