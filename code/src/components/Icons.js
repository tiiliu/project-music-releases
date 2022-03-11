import React from "react";

import heart from "../icons/heart.svg";

import play from "../icons/play.svg";

import dots from "../icons/dots.svg";

const Icons = (props) => {
  return (
    <div className="icon-wrapper">
      <div className="icon-container">
        <img className="heart-icon" src={heart} alt="heart icon" />
      </div>
      <div className="icon-container">
        <a
          className="play-link"
          href={props.album.external_urls.spotify}
          target="-blank"
          rel="noopener noreferrer"
        >
          <img className="play-icon" src={play} alt="play icon" />
        </a>
      </div>
      <div className="icon-container">
        <img className="dots-icon" src={dots} alt="dots icon" />
      </div>
    </div>
  );
};

export default Icons;
