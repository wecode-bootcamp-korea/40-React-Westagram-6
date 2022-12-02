import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import DROPDOWN_DATA from "./dropdownData";
import { Link } from "react-router-dom";
library.add(fab, far, fas);

const Dropdown = props => {
  return (
    <div className="speech-bubble nav_dropdown">
      {DROPDOWN_DATA.map((el, i) => {
        return (
          <div key={el.id} className="speech-box">
            <Link to={el.url}>
              <FontAwesomeIcon
                className="fontAwesome"
                icon={el.icon}
                size="lg"
              />
              <strong>{el.content}</strong>
            </Link>
          </div>
        );
      })}

      <div className="speech-box logout">
        <Link>
          <strong>로그아웃</strong>
        </Link>
      </div>
    </div>
  );
};
export default Dropdown;
