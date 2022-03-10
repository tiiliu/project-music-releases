import React from "react";

export const Artist = (props) => {
  return (
    <div className="artists">
      <a
        className="artist-link"
        href={props.artist.external_urls.spotify}
        target="-blank"
      >
        <h3 className="artist-name">{props.artist.name}</h3>
      </a>
    </div>
  );
};

export default Artist;
