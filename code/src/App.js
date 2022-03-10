import React from "react";
import data from "./data.json";
import { Album } from "components/Album";
import Header from "components/Header";

// console.log(data);

export const App = () => {
  return (
    <section className="albums-container">
      <Header />
      {data.albums.items.map((album) => {
        return <Album album={album} />;
      })}
    </section>
  );
};
