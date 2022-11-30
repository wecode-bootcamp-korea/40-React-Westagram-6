import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import DROPDOWN_DATA from "./dropdownData";
library.add(fab, far, fas);

const Dropdown = props => {
  // const dropdownOpen = props.dropdownOpen;
  // const setDropdownOpen = props.setDropdownOpen;
  // console.log(dropdownOpen);
  // useEffect(() => {
  //   const checkWindowClick = e => {
  //     e.stopPropagation();
  //     const target = e.target.closest(".speech-bubble");
  //     console.log("target : ", target);
  //     console.log("open : ", dropdownOpen);
  //     if (dropdownOpen && target) {
  //       console.log("11111");
  //       return;
  //     } else {
  //       console.log("22222");
  //       // setDropdownOpen(false);
  //     }
  //   };
  //   window.addEventListener("click", checkWindowClick);
  // }, [dropdownOpen]);
  return (
    <div className="speech-bubble nav_dropdown">
      {DROPDOWN_DATA.map((el, i) => {
        return (
          <div key={el.id} className="speech-box">
            <FontAwesomeIcon className="fontAwesome" icon={el.icon} size="lg" />
            <strong>{el.content}</strong>
          </div>
        );
      })}

      <div className="speech-box logout">
        <strong>로그아웃</strong>
      </div>
    </div>
  );
};
export default Dropdown;

//  useEffect stoppropaganda
