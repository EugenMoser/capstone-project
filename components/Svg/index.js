const svgObject = {
  details:
    "M22.65 34h3V22h-3ZM24 18.3q.7 0 1.175-.45.475-.45.475-1.15t-.475-1.2Q24.7 15 24 15q-.7 0-1.175.5-.475.5-.475 1.2t.475 1.15q.475.45 1.175.45ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z",
  close:
    "m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z",
  contact:
    "M39.75 42q-6.1 0-12.125-3T16.8 31.2Q12 26.4 9 20.375 6 14.35 6 8.25q0-.95.65-1.6Q7.3 6 8.25 6h7q.7 0 1.225.475.525.475.675 1.275l1.35 6.3q.1.7-.025 1.275t-.525.975l-5 5.05q2.8 4.65 6.275 8.1Q22.7 32.9 27.1 35.3l4.75-4.9q.5-.55 1.15-.775.65-.225 1.3-.075l5.95 1.3q.75.15 1.25.75T42 33v6.75q0 .95-.65 1.6-.65.65-1.6.65Zm-28.3-23.4 4.05-4.1L14.35 9H9q0 1.95.6 4.275t1.85 5.325ZM29.9 36.75q2.05.95 4.45 1.55 2.4.6 4.65.7v-5.35l-5.15-1.05ZM11.45 18.6ZM29.9 36.75Z",
  edit: "M9 39h2.2l22.15-22.15-2.2-2.2L9 36.8Zm30.7-24.3-6.4-6.4 2.1-2.1q.85-.85 2.1-.85t2.1.85l2.2 2.2q.85.85.85 2.1t-.85 2.1Zm-2.1 2.1L12.4 42H6v-6.4l25.2-25.2Zm-5.35-1.05-1.1-1.1 2.2 2.2Z",
  delete:
    "M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z",
  home: "M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm-3 3V18L24 6l16 12v24H26.5V29.5h-5V42Zm16-17.65Z",
  sell: "M27.95 43.15q-.9.9-2.175.9t-2.175-.9L4.85 24.4q-.5-.5-.675-1.05Q4 22.8 4 22.2V7q0-1.3.85-2.15Q5.7 4 7 4h15.2q.6 0 1.2.175t1.1.675L43.15 23.5q.95.95.95 2.225 0 1.275-.95 2.225ZM25.9 41.1l15.2-15.2L22.2 7H7v15.2ZM12.25 14.8q1.05 0 1.825-.775.775-.775.775-1.825 0-1.05-.775-1.825Q13.3 9.6 12.25 9.6q-1.05 0-1.825.775-.775.775-.775 1.825 0 1.05.775 1.825.775.775 1.825.775ZM7 7Z",
  myarticles:
    "M9 37.15q3-2.8 6.8-4.525Q19.6 30.9 24 30.9q4.4 0 8.2 1.725Q36 34.35 39 37.15V9H9Zm15.1-10.2q2.9 0 4.9-2 2-2 2-4.9 0-2.9-2-4.9-2-2-4.9-2-2.9 0-4.9 2-2 2-2 4.9 0 2.9 2 4.9 2 2 4.9 2ZM9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h30q1.2 0 2.1.9.9.9.9 2.1v30q0 1.2-.9 2.1-.9.9-2.1.9Zm2.75-3h24.5v-.45q-2.7-2.3-5.8-3.475Q27.35 33.9 24 33.9t-6.45 1.175q-3.1 1.175-5.8 3.475V39ZM24.1 23.95q-1.6 0-2.75-1.15t-1.15-2.75q0-1.65 1.15-2.775t2.75-1.125q1.65 0 2.775 1.125T28 20.05q0 1.6-1.125 2.75T24.1 23.95Zm-.1-.9Z",
  person:
    "M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z",
  mail: "M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm17-15.1L7 13.75V37h34V13.75Zm0-3L40.8 11H7.25ZM7 13.75V11v26Z",
  upload:
    "M38.65 15.3V11h-4.3V8h4.3V3.65h3V8H46v3h-4.35v4.3ZM4.7 44q-1.2 0-2.1-.9-.9-.9-.9-2.1V15.35q0-1.15.9-2.075.9-.925 2.1-.925h7.35L15.7 8h14v3H17.1l-3.65 4.35H4.7V41h34V20h3v21q0 1.2-.925 2.1-.925.9-2.075.9Zm17-7.3q3.6 0 6.05-2.45 2.45-2.45 2.45-6.1 0-3.6-2.45-6.025Q25.3 19.7 21.7 19.7q-3.65 0-6.075 2.425Q13.2 24.55 13.2 28.15q0 3.65 2.425 6.1Q18.05 36.7 21.7 36.7Zm0-3q-2.4 0-3.95-1.575-1.55-1.575-1.55-3.975 0-2.35 1.55-3.9 1.55-1.55 3.95-1.55 2.35 0 3.925 1.55 1.575 1.55 1.575 3.9 0 2.4-1.575 3.975Q24.05 33.7 21.7 33.7Zm0-5.5Z",
  search:
    "M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z",
  animal:
    "M8.5 23.75q-1.9 0-3.2-1.3-1.3-1.3-1.3-3.2 0-1.9 1.3-3.2 1.3-1.3 3.2-1.3 1.9 0 3.2 1.3 1.3 1.3 1.3 3.2 0 1.9-1.3 3.2-1.3 1.3-3.2 1.3Zm9.25-8.5q-1.9 0-3.2-1.3-1.3-1.3-1.3-3.2 0-1.9 1.3-3.2 1.3-1.3 3.2-1.3 1.9 0 3.2 1.3 1.3 1.3 1.3 3.2 0 1.9-1.3 3.2-1.3 1.3-3.2 1.3Zm12.5 0q-1.9 0-3.2-1.3-1.3-1.3-1.3-3.2 0-1.9 1.3-3.2 1.3-1.3 3.2-1.3 1.9 0 3.2 1.3 1.3 1.3 1.3 3.2 0 1.9-1.3 3.2-1.3 1.3-3.2 1.3Zm9.25 8.5q-1.9 0-3.2-1.3-1.3-1.3-1.3-3.2 0-1.9 1.3-3.2 1.3-1.3 3.2-1.3 1.9 0 3.2 1.3 1.3 1.3 1.3 3.2 0 1.9-1.3 3.2-1.3 1.3-3.2 1.3Zm-26.2 20.5q-2.1 0-3.45-1.575T8.5 38.95q0-2.1 1.275-3.725T12.5 32.1q1.1-1.1 2.05-2.325.95-1.225 1.8-2.525 1.45-2.2 3.25-4.1 1.8-1.9 4.4-1.9 2.6 0 4.425 1.9 1.825 1.9 3.275 4.15.85 1.3 1.775 2.5.925 1.2 2.025 2.3 1.45 1.5 2.725 3.125Q39.5 36.85 39.5 38.95q0 2.15-1.35 3.725-1.35 1.575-3.45 1.575-2.7 0-5.35-.45-2.65-.45-5.35-.45-2.7 0-5.35.45-2.65.45-5.35.45Z",
  smoker:
    "M4 38v-5h30.5v5Zm32.75 0v-5h2.5v5Zm4.75 0v-5H44v5Zm-4.75-7.25v-2.8q0-2.1-1.225-3.3-1.225-1.2-2.975-1.2H29q-2.7 0-4.525-2.075Q22.65 19.3 22.65 16.6t1.825-4.525Q26.3 10.25 29 10.25v2.5q-1.75 0-2.8 1.05-1.05 1.05-1.05 2.8 0 1.75 1.05 3.05 1.05 1.3 2.8 1.3h3.55q2.7 0 4.7 1.85t2 4.55v3.4Zm4.75 0v-5q0-3.75-2.5-6.15-2.5-2.4-6.25-2.4v-2.5q1.7 0 2.775-1.2t1.075-2.9q0-1.7-1.075-2.9T32.75 6.5V4q2.7 0 4.525 1.95Q39.1 7.9 39.1 10.6q0 1.65-.625 2.85-.625 1.2-1.625 2.05 2.9 1 5.025 3.75Q44 22 44 25.75v5Z",
  bookmark_empty:
    "m24 41.95-2.05-1.85q-5.3-4.85-8.75-8.375-3.45-3.525-5.5-6.3T4.825 20.4Q4 18.15 4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.85 0 5.275 1.35Q22.2 8 24 10.55q2.1-2.7 4.45-3.975T33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 2.3-.825 4.55T40.3 25.425q-2.05 2.775-5.5 6.3T26.05 40.1ZM24 38q5.05-4.65 8.325-7.975 3.275-3.325 5.2-5.825 1.925-2.5 2.7-4.45.775-1.95.775-3.9 0-3.3-2.1-5.425T33.5 8.3q-2.55 0-4.75 1.575T25.2 14.3h-2.45q-1.3-2.8-3.5-4.4-2.2-1.6-4.75-1.6-3.3 0-5.4 2.125Q7 12.55 7 15.85q0 1.95.775 3.925.775 1.975 2.7 4.5Q12.4 26.8 15.7 30.1 19 33.4 24 38Zm0-14.85Z",
  bookmark_fill:
    "m24 41.95-2.05-1.85q-5.3-4.85-8.75-8.375-3.45-3.525-5.5-6.3T4.825 20.4Q4 18.15 4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.85 0 5.275 1.35Q22.2 8 24 10.55q2.1-2.7 4.45-3.975T33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 2.3-.825 4.55T40.3 25.425q-2.05 2.775-5.5 6.3T26.05 40.1Z",
};

function Svg({ variant, size = "35px", color = "currentColor" }) {
  return (
    <svg
      style={{ width: size, height: size }}
      viewBox="0 0 48 48"
    >
      <path
        fill={color}
        d={svgObject[variant]}
      />
    </svg>
  );
}

export default Svg;
