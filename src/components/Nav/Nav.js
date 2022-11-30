import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../taeyoon/Dropdown";
import "../../components/Nav/nav.scss";
library.add(fab, far, fas);

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropDownHandler = e => {
    setDropdownOpen(!dropdownOpen);
    console.log(dropdownOpen);
  };

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
            onClick={dropDownHandler}
          />
        </Link>

        {/* 드롭다운*/}
        {dropdownOpen ? <Dropdown /> : false}
      </div>
    </nav>
  );
};

export default Nav;
