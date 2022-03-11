import React from "react";

export const Artist = (props) => {
  return (
    <div className="artist-container">
      <a
        className="artist-link"
        href={props.artist.external_urls.spotify}
        target="-blank"
        rel="noopener noreferrer"
      >
        {props.artist.name}
      </a>
    </div>
  );
};

export default Artist;
