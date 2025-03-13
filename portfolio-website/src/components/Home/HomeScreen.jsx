import React from "react";
import Home from "./Home";
import Header from "../Header/Header";

function HomeScreen() {
  return (
    <section id="home__full_screen" className="home__full_screen w-full h-auto text-white">
      <Header />
      <Home />
    </section>
  );
}

export default HomeScreen;
