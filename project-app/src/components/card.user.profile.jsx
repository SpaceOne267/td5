import React from "react";
// css
import "../media/css/component/card.user.profile.css";
// icons
import IconPlayArrow from "../components/icons/playArrow";
import IconDUR from "../components/icons/dur";
import IconCoin from "./icons/coin";
import IconAdd from "../components/icons/add";
import IconArrowCrook from "../components/icons/arrowCrook";
import IconArrowTraffic from "../components/icons/arrowTraffic";
import IconStarPremium from "../components/icons/starPremium";
// Navigation
import { useNavigate } from "react-router-dom";
// img
import ImgProfile from "../media/img/avatar.png";
import UserFrame from "../game/res/skins/frames/frame-0.svg";

const CardUserProfile = () => {
  const navigate = useNavigate();

  // Navigation handlers
  const linkeDeposit = () => navigate("/deposit");
  const linkWithdraw = () => navigate("/withdraw");
  const linkExchange = () => navigate("/exchange");

  return (
    <div className="row card user_profile anim_sjump">
      <div className="row">
        <div className="user_picture">
          <img className="img" src={ImgProfile} alt="user-img" />
          <img className="frame" src={UserFrame} alt="user-frame" />
        </div>
        {/* /user-info */}
        <div className="user_info">
          <p className="user_name">
            PAUL
            <IconStarPremium />
          </p>
          <span className="user_status">
            <IconPlayArrow />
            In Game
          </span>
          <div className="row check">
            <span className="coins_count">
              1.230.200
              <IconCoin />
            </span>
            <span className="dur">
              <IconDUR />
              0.00 DUR
            </span>
          </div>
        </div>
      </div>
      <div className="btns">
        <button className="btn_deposit" onClick={linkeDeposit}>
          <IconAdd />
          Deposit
        </button>
        <button className="btn_withdraw" onClick={linkWithdraw}>
          <IconArrowCrook />
          Withdraw
        </button>
        <button className="btn_exchange" onClick={linkExchange}>
          <IconArrowTraffic />
          Exchange
        </button>
      </div>
    </div>
  );
};

export default CardUserProfile;
