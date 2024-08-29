import React, { useState, useEffect } from "react";
import {
  SuitClubFill,
  SuitDiamondFill,
  SuitHeartFill,
  SuitSpadeFill,
} from "react-bootstrap-icons";

const Preloader = () => {
  const [isActive, setIsActive] = useState(true);
  let scrollPosition = 0;

  function disableScroll() {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
  }

  function enableScroll() {
    document.body.style.overflow = "";
    document.body.style.position = "";
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setIsActive(false);
    };

    const handlePageLoad = () => {
      setIsActive(false);
    };

    // Если DOM уже загружен
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      handlePageLoad();
    } else {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
      window.removeEventListener("load", handlePageLoad);
      const m = document.querySelector(".page");
      m?.classList.add("page-loaded");
      disableScroll();
      setTimeout(() => {
        enableScroll();
      }, 2000);
    };
  }, []);

  return (
    <div className={`preloader ${isActive ? "" : "preloader-deactive"}`}>
      <div className="content">
        <span>LOADING</span>
        <div className="loader">
          <SuitClubFill color="#fff" className="s1" />
          <SuitDiamondFill color="#fff" className="s2" />
          <SuitHeartFill color="#fff" className="s3" />
          <SuitSpadeFill color="#fff" className="s4" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
