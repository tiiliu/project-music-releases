import React from "react";
import data from "./data.json";
import { Album } from "components/Album";

// console.log(data);

export const App = () => {
  const albumArray = data.albums.items.map((item) => {
    return {
      artistArray: item.artists.map((artist) => {
        return {
          artistName: artist.name,
          artistUrl: artist.external_urls.spotify,
        };
      }),
      albumName: item.name,
      imageAlbum: item.images[1].url,
    };
  });
  console.log("album", albumArray);

  // console.log(albumArray);
  // const albumCover = albumArray.map((album) => {
  //   return (image = album.images[1].url);
  // });
  // console.log(albumCover);
};
