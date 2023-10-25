import React, { useEffect } from "react";
import { useState } from "react";
import "../dashboard.css";
import Greendot from "../img/green dot.png";
import Reddot from "../img/red dot.png";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import axios from "axios";

const Bargraph = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get("https://api.coinranking.com/v2/coins").then((response) => {
      const coinsData = response.data.data.coins;
      setCoins(coinsData.slice(0, 4)); // Get only the first 4 coins
      console.log(coinsData);
    });
  }, []);

  return (
    <div className="graphcontainer">
      <div className="graphhead">
        <div className="leftG">
          <h3 className="activities">Activities</h3>
          <p className="dates">May - June 2023</p>
        </div>
        <di className="rightG">
          <div className="indicatoritem">
            <img src={Reddot} alt="" />
            <p className="indicator">MarketCap</p>
          </div>
          <div className="indicatoritem">
            <img src={Greendot} alt="" />
            <p className="indicator">Price</p>
          </div>
        </di>
      </div>

      <BarChart
        width={900}
        height={270}
        data={coins.map((coin) => ({
          name: coin.name,
          marketCap: coin.listedAt,
          price: coin.price,
        }))}
        margin={{
          top: 30,
          right: 15,
          left: 50,
          bottom: 30,
        }}
        className="barchart"
      >
        <CartesianGrid
          strokeDasharray="3 3"
          horizontal={true}
          vertical={false}
        />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="price" fill="#98d89e" minPointSize={8} barSize={40}></Bar>
        <Bar
          dataKey="marketCap"
          fill="#ee8484"
          minPointSize={10}
          barSize={40}
        />
      </BarChart>
    </div>
  );
};

export default Bargraph;
