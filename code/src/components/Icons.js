import React from "react";

import heart from "../icons/heart.svg";

import play from "../icons/play.svg";

import dots from "../icons/dots.svg";

const Icons = () => {
  return (
    <div className="icon-wrapper">
      <div className="icon-container">
        <img className="heart-icon" src={heart} alt="heart icon" />
      </div>
      <div className="icon-container">
        <img className="play-icon" src={play} alt="play icon" />
      </div>
      <div className="icon-container">
        <img className="dots-icon" src={dots} alt="dots icon" />
      </div>
    </div>
  );
};

export default Icons;
