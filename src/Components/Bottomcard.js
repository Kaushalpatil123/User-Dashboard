import React from "react";
import "../dashboard.css";
import Greendot from "../img/green dot.png";
import Yellowdot from "../img/yellow dot.png";
import Reddot from "../img/red dot.png";
import { PieChart, Pie, Cell } from "recharts";

const Bottomcard = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
  ];
  const COLORS = ["#98d89e", "#ffc928", "#ee8484"];

  return (
    <div className="bottomcard">
      <div className="bottomcards">
        <di className="cardtitle">
          <h4 className="cardtitlehead">Top products</h4>
          <p className="carddate">May - June2023</p>
        </di>
        <div className="graph">
          <PieChart width={170} height={170} className="piechart">
            <Pie
              data={data}
              cx={80}
              cy={80}
              innerRadius={60}
              outerRadius={80}
              fill="#98d89e"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="catagory">
            <div className="categoryitem">
              <div className="dotplustitle">
                <img src={Greendot} alt="" />
                <h5 className="cattitle">Basic tees</h5>
              </div>
              <p className="catdescription">55%</p>
            </div>
            <div className="categoryitem">
              <div className="dotplustitle">
                <img src={Yellowdot} alt="" />
                <h5 className="cattitle">Custom Short Parts</h5>
              </div>
              <p className="catdescription">31%</p>
            </div>
            <div className="categoryitem">
              <div className="dotplustitle">
                <img src={Reddot} alt="" />
                <h5 className="cattitle">Super Hoodle</h5>
              </div>
              <p className="catdescription">55%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottomcard;
