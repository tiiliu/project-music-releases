import React from "react";
import data from "./data.json";
import { Album } from "components/Album";
import Header from "components/Header";
import Footer from "components/Footer";

export const App = () => {
  return (
    <section className="app">
      <Header />
      <section className="main-container">
        {data.albums.items.map((album) => {
          return <Album key={album.id} album={album} />;
        })}
      </section>
      <Footer />
    </section>
  );
};
