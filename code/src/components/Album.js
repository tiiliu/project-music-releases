import React from "react";

import Icons from "components/Icons";

export const Album = (props) => {
  return (
    <section className="album-card">
      <div className="image-group">
        <img
          className="album-cover"
          src={props.album.images[1].url}
          alt="album cover"
          rel="noopener noreferrer"
        />
        <div className="image-overlay"></div>
        <Icons album={props.album} />
      </div>

      <div className="text-container">
        <div className="album-text-group">
          <a
            className="album-link"
            href={props.album.external_urls.spotify}
            target="-blank"
            rel="noopener noreferrer"
          >
            <h2 className="album-name">{props.album.name}</h2>
          </a>
        </div>

        <div className="artist-text-group">
          {props.album.artists.map((artist, index) => {
            if (props.album.artists.length === 1) {
              return (
                <div className="artist-container">
                  <a
                    className="artist-link"
                    href={artist.external_urls.spotify}
                    target="-blank"
                    rel="noopener noreferrer"
                  >
                    {artist.name}
                  </a>
                </div>
              );
            } else {
              return (
                <div className="artist-container">
                  <a
                    className="artist-link"
                    href={artist.external_urls.spotify}
                    target="-blank"
                    rel="noopener noreferrer"
                  >
                    {artist.name}{" "}
                    {index < props.album.artists.length - 2
                      ? ", "
                      : index < props.album.artists.length - 1
                      ? "& "
                      : ""}
                  </a>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};
