import React from "react";
import data from "./data.json";
// import { Album } from "components/Album";

import heart from "./icons/heart.svg";
import play from "./icons/play.svg";
import dots from "./icons/dots.svg";

// console.log(data);

export const App = () => {
  return (
    <section className="album-container">
      {data.albums.items.map((album) => (
        <div className="album-card">
          <img
            className="album-cover"
            src={album.images[1].url}
            alt="album cover"
          />
          <img className="heart-icon" src={heart} alt="heart icon" />
          <img className="play-icon" src={play} alt="play icon" />
          <img className="dots-icon" src={dots} alt="dots icon" />
          <a
            className="album-link"
            href={album.external_urls.spotify}
            target="-blank"
          >
            <h2 className="album-name">{album.name}</h2>
          </a>
          {album.artists.map((artist) => (
            <a
              className="artist-link"
              href={artist.external_urls.spotify}
              target="-blank"
            >
              <h3 className="artist-name">{artist.name}</h3>
            </a>
          ))}
        </div>
      ))}
    </section>
  );
};
