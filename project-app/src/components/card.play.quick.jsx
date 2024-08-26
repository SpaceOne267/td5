import * as React from "react";

// css
import "../media/css/component/card.play.custom.css";
// img
import ImgCards from "../media/svg/dCards.svg";
import { useNavigate } from "react-router-dom";

const CardPlayQuick = () => {
  const navigate = useNavigate();
  const linkGame = () => {
    navigate("/game?type=quick");
  };
  return (
    <button
      className="card_play_custom anim_sjump"
      onClick={() => {
        linkGame();
      }}
    >
      <div className="texts">
        <h1 className="title">QUICK GAME</h1>
        <h1>play</h1>
      </div>
      <img className="cardImg" src={ImgCards} alt="icon" />
    </button>
  );
};
export default CardPlayQuick;
