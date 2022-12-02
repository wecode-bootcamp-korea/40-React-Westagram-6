// const FOOTER = () => {
//   return (
//     <div>
//       <ul>
//         <li>"소개"</li>
//         <li>"도움말"</li>
//         <li>"홍보 센터"</li>
//         <li>"API"</li>
//         <li>"채용 정보"</li>
//         <li>"개인정보처리방침"</li>
//         <li>"약관"</li>
//         <li>"위치"</li>
//         <li>"인기 계정"</li>
//         <li>"해시태그"</li>
//         <li>"언어"</li>
//       </ul>
//     </div>
//   )
// }

export const FOOTER_LIST = [
  { id: 1, footerName: "소개" },
  { id: 2, footerName: ". 도움말" },
  { id: 3, footerName: ". 홍보 센터" },
  { id: 4, footerName: ". API" },
  { id: 5, footerName: ". 채용 정보" },
  { id: 6, footerName: ". 개인정보처리방침" },
  { id: 7, footerName: ". 약관" },
  { id: 8, footerName: ". 위치" },
  { id: 9, footerName: ". 인기 계정" },
  { id: 10, footerName: ". 해시태그" },
  { id: 11, footerName: ". 언어" },
  { id: 12, footerName: "© 2022 INSTAGRAM FROM META" },
];

// 상수데이터를 사용하는 이유 : ui상에서 바뀌지 않는 정보들을 매번 api로 불러올 필요가 없기때문에
// 상수데이터로 고정값을 줘버린다. ui를 효율적으로, 확장성 있게 구성 할 수 있으며 유지보수가 용이

//어디서 어떻게 활용? : 반복되는 ui구조는 상수 데이터와 map 메서드를 활용해 간결하게 표현가능

//관리방법 : 상수 데이터는 컴포넌트 파일 내부에서 선언하거나, 별도의 파일로 분리해서 사용
