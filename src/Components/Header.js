import React from "react";
import "../dashboard.css";
import search from "../img/Search icon.png";
import bell from "../img/Vector bell.png";
import usericon from "../img/user_icon.png";
const Header = () => {
  return (
    <div className="head">
      <header className="dashheader">Dashboard</header>
      <div className="sideheader">
        <div className="search">
          <input className="searchbar" type="text" placeholder="Search" />
          <img className="searchimg" src={search} alt="" />
        </div>
        <div className="lastheader">
          <img className="bell" src={bell} alt="" />
          <img className="user" src={usericon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
