import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "../../components/Nav/nav.scss";
library.add(fab, far, fas);

const Nav = () => {
  return (
    <nav className="nav__container">
      <div className="nav__left">
        <Link className="nav__left--icon" to="#">
          <FontAwesomeIcon
            className="fontAwesome"
            icon="fa-brands fa-instagram"
            size="2x"
          />
        </Link>
        <Link className="nav__left--logo" to="#">
          Westagram
        </Link>
      </div>
      <div className="nav__search">
        <input type="text" placeholder="🔍검색1" />
      </div>

      <div className="nav__right">
        <Link to="#">
          <FontAwesomeIcon
            className="fontAwesome"
            icon="fa-regular fa-compass"
            size="2x"
          />
        </Link>

        <Link to="#">
          <FontAwesomeIcon
            className="fontAwesome"
            icon="fa-regular fa-heart"
            size="2x"
          />
        </Link>

        <Link to="#">
          <FontAwesomeIcon
            className="fontAwesome"
            icon="fa-regular fa-user"
            size="2x"
          />
        </Link>

        {/* 드롭다운*/}
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
      </div>
    </nav>
  );
};

export default Nav;
