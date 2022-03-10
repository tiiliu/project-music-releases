import React from "react";

import Icons from "components/Icons";

import Artist from "components/Artist";

export const Album = (props) => {
  return (
    <section className="album-card">
      <div className="image-group">
        <img
          className="album-cover"
          src={props.album.images[1].url}
          alt="album cover"
        />
        <div className="image-overlay"></div>
        <Icons />
      </div>
      <div className="album-text-group">
        <a
          className="album-link"
          href={props.album.external_urls.spotify}
          target="-blank"
        >
          <h2 className="album-name">{props.album.name}</h2>
        </a>
      </div>
      <div className="artist-text-group">
        {props.album.artists.map((artist) => {
          return <Artist artist={artist} />;
        })}
      </div>
    </section>
  );
};
