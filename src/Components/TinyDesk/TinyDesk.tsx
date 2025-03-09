import React from "react";
import "./TinyDesk.css";

const TinyDesk: React.FC = () => {
  return (
    <div className="study-icon-container">
      <svg
        // width="64"
        // height="64"
        // viewBox="0 0 64 64"
        width="740"
        height="540"
        viewBox="0 5 45 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="study">
          <rect width="64" height="64" />
          <g id="smoke">
            <path
              id="smoke-2"
              d="M9 21L9.55279 19.8944C9.83431 19.3314 9.83431 18.6686 9.55279 18.1056L9 17L8.44721 15.8944C8.16569 15.3314 8.16569 14.6686 8.44721 14.1056L9 13"
              stroke="#797270"
            />
            <path
              id="smoke-1"
              d="M6.5 22L7.05279 20.8944C7.33431 20.3314 7.33431 19.6686 7.05279 19.1056L6.5 18L5.94721 16.8944C5.66569 16.3314 5.66569 15.6686 5.94721 15.1056L6.5 14"
              stroke="#797270"
            />
          </g>
          <g id="laptop">
            <rect
              id="laptop-base"
              x="17"
              y="28"
              width="20"
              height="3"
              fill="#F3F3F3"
              stroke="#453F3C"
              strokeWidth="2"
            />
            <rect
              id="laptop-screen"
              x="18"
              y="17"
              width="18"
              height="11"
              fill="#5A524E"
              stroke="#453F3C"
              strokeWidth="2"
            />
            <rect
              id="line-1"
              x="20"
              y="19"
              width="14"
              height="1"
              fill="#F78764"
            />
            <rect
              id="line-2"
              x="20"
              y="21"
              width="14"
              height="1"
              fill="#F9AB82"
            />
            <rect
              id="line-3"
              x="20"
              y="23"
              width="14"
              height="1"
              fill="#F78764"
            />
            <rect
              id="line-4"
              x="20"
              y="25"
              width="14"
              height="1"
              fill="#F9AB82"
            />
          </g>
          <g id="cup">
            <rect
              x="5"
              y="24"
              width="5"
              height="7"
              fill="#CCC4C4"
              stroke="#453F3C"
              strokeWidth="2"
            />
            <path
              d="M11 28C12.1046 28 13 27.1046 13 26C13 24.8954 12.1046 24 11 24"
              stroke="#453F3C"
              strokeWidth="2"
            />
            <rect x="6" y="25" width="3" height="1" fill="#D6D2D1" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default TinyDesk;
