import React from "react";

const Footer = () => {
  const a = FOOTER_LIST.map(el => (
    <li key={el.id}>{el.content}&nbsp;&#183;&nbsp;</li>
  ));
  return <span>{a}</span>;
};

export default Footer;

const FOOTER_LIST = [
  { id: 1, content: "Westagram 정보" },
  { id: 2, content: "지원" },
  { id: 3, content: "홍보 센터" },
  { id: 4, content: "API" },
  { id: 5, content: "채용 정보" },
  { id: 6, content: "개인정보처리방침" },
  { id: 7, content: "약관" },
  { id: 8, content: "디렉터리" },
  { id: 9, content: "프로필" },
  { id: 10, content: "해시태그" },
  { id: 11, content: "언어" },
];
