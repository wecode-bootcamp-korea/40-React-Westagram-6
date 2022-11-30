import React, { useState, useEffect } from "react";
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
  const dropDownHandler = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // useEffect(() => {
  //   const checkWindowClick = e => {
  //     e.stopPropagation();
  //     const target = e.target.closest(".speech-bubble");
  //     console.log("target : ", target);
  //     console.log("open : ", dropdownOpen);
  //     // if (!dropdownOpen) return;
  //     if (dropdownOpen && target) {
  //       console.log("11111");
  //       window.removeEventListener("click", checkWindowClick);
  //     } else if (!(dropdownOpen && target === null)) {
  //       console.log("22222");
  //       setDropdownOpen(false);
  //     }
  //   };
  //   window.addEventListener("click", checkWindowClick);
  // }, [dropdownOpen]);

  // const checkWindowClick = e => {
  //   console.log("2");
  //   e.stopPropagation();
  //   console.log(e.target);
  // };

  // window.addEventListener("click", checkWindowClick);

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
        {dropdownOpen && (
          <Dropdown
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
          />
        )}
      </div>
    </nav>
  );
};

export default Nav;
