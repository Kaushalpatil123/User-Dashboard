import React, { useEffect } from "react";
import { useState } from "react";
import img1 from "../img/1stVector.png";
import axios from "axios";

const TopCard = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios.get("https://api.coinranking.com/v2/coins").then((response) => {
      const coinsData = response.data.data.stats;
      setStats(coinsData); // Get only the first 4 coins
      console.log(coinsData);
    });
  }, []);

  const total = stats.total;
  const totalCoins = stats.totalCoins;
  const totalMarkets = stats.totalMarkets;
  const totalExchanges = stats.totalExchanges;

  return (
    <div className="cardContainer">
      <div className="card">
        <div className="imgback">
          <img className="cardimg" src={img1} alt="" />
        </div>
        <p className="cardhead">Total</p>
        <div className="stats">
          <p className="numbers">{total}</p>
          <p className="percentage">+3.2%</p>
        </div>
      </div>
      <div className="card">
        <div className="imgback">
          <img className="cardimg" src={img1} alt="" />
        </div>
        <p className="cardhead">Total Coins</p>
        <div className="stats">
          <p className="numbers">{totalCoins}</p>
          <p className="percentage">+6.5%</p>
        </div>
      </div>

      <div className="card">
        <div className="imgback">
          <img className="cardimg" src={img1} alt="" />
        </div>
        <p className="cardhead">Total Markets</p>
        <div className="stats">
          <p className="numbers">{totalMarkets}</p>
          <p className="percentage">+8.9%</p>
        </div>
      </div>

      <div className="card">
        <div className="imgback">
          <img className="cardimg" src={img1} alt="" />
        </div>
        <p className="cardhead">Total Exchanges</p>
        <div className="stats">
          <p className="numbers">{totalExchanges}</p>
          <p className="percentage">+1.4%</p>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
