import React from "react";

// components

import Preloader from "../includes/preloader";
// NavBar
import NavBar from "../components/nav.bar";

const Market = () => {
  return (
    <section className="page menu_section pb-80">
      <Preloader />
      <div className="container">
        <NavBar />
      </div>
    </section>
  );
};
export default Market;
