import React from "react";

// components
import GamesPlayCards from "../components/games.play.cards";
import GamesRooms from "../components/games.rooms";
import Preloader from "../includes/preloader";
// NavBar
import NavBar from "../components/nav.bar";

const Games = () => {
  return (
    <section className="page games pb-80">
      <Preloader />
      <div className="container">
        {/* play cards */}
        <GamesPlayCards />
        {/* rooms */}
        <GamesRooms />
        {/* nav */}
        <NavBar />
      </div>
    </section>
  );
};
export default Games;
