import React from "react";
import "../dashboard.css";
import dashicon from "../img/dashboard_icon.png";
import transactionicon from "../img/transaction_icon.png";
import scheduleicon from "../img/schedule_icon.png";
import usericon from "../img/user_icon1.png";
import settingicon from "../img/setting_icon.png";

const Sidebar = () => {
  return (
    <div className="nav">
      <h1 className="navheading">Board.</h1>
      <div>
        <div className="navitem">
          <img className="navimg" src={dashicon} alt="" />
          <a className="navlink" href="">
            Dashboard
          </a>
        </div>
        <div className="navitem">
          <img className="navimg" src={transactionicon} alt="" />
          <a className="navlink" href="">
            Transactions
          </a>
        </div>
        <div className="navitem">
          <img className="navimg" src={scheduleicon} alt="" />
          <a className="navlink" href="">
            Schedules
          </a>
        </div>
        <div className="navitem">
          <img className="navimg" src={usericon} alt="" />
          <a className="navlink" href="">
            Users
          </a>
        </div>
        <div className="navitem">
          <img className="navimg" src={settingicon} alt="" />
          <a className="navlink" href="">
            Settings
          </a>
        </div>
      </div>

      <div className="bottomlinks">
        <a href="" className="bottomlink">
          Help
        </a>

        <a href="" className="bottomlink">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
