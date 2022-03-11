import React from "react";
import data from "./data.json";
import { Album } from "components/Album";
import Header from "components/Header";

// console.log(data);

export const App = () => {
  return (
    <section className="App">
      <Header />
      <section className="main-container">
        {data.albums.items.map((album) => {
          return <Album key={album.id} album={album} />;
        })}
      </section>
    </section>
  );
};
