import React from "react";
import { Link } from "react-router-dom";
import footerData from "./footerData";

const Footer = () => {
  return (
    <div className="main__right--footer">
      <ul className="footer__list">
        {footerData.map(el => {
          return (
            <li key={el.id}>
              <Link to={el.url}>{el.content}</Link>
            </li>
          );
        })}
      </ul>
      <span>ⓒ 2022 INSTAGRAM</span>
    </div>
  );
};

export default Footer;
