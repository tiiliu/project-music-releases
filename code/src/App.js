import React from "react";
import data from "./data.json";
import { Album } from "components/Album";

console.log(data);

export const App = () => {
  const albumArray = data.albums.items.map((item) => {
    return item;
  });
  console.log(albumArray);
  const albumCover = albumArray.map((album) => {
    return (image = album.images[1].url);
  });
  console.log(albumCover);
};
