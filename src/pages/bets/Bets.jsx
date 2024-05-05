import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import BottomNav from "../components/bottomNav/BottomNav";
import Header from "../components/header/Header";
import { Wheel } from "react-custom-roulette";
import "./bets.css";

const data = [
  {
    option: "Slam Star",
    style: { backgroundColor: "#4c4c4c" },
  },
  { option: "Grind Guru", style: { backgroundColor: "#4c4c4c" } },
  { option: "Bounce Baller", style: { backgroundColor: "#4c4c4c" } },
  { option: "Ace Artistry", style: { backgroundColor: "#4c4c4c" } },
  {
    option: "Fairway Fame",
    style: {
      backgroundColor: "#4c4c4c",
    },
  },
  { option: "Splash Flash", style: { backgroundColor: "#4c4c4c" } },
  { option: "Wave Warrior", style: { backgroundColor: "#4c4c4c" } },
  { option: "Grind Guru", style: { backgroundColor: "#4c4c4c" } },
];

export default function Bets() {
  const [mustSpin, setMustSpin] = useState(false);

  return (
    <body>
      <Header />
      <div className="betContainer">
        <div className="titleAndTxtContainer">
          <h2>Roleta NFT</h2>
          <p>Aposte seus WTKs e tenha a chance de conseguir NFTs raros</p>
        </div>

        <div className="roulleteContainer">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={data.length - 1}
            data={data}
            outerBorderColor={"#ccc"}
            outerBorderWidth={8}
            radiusLineColor={"#ccc"}
            radiusLineWidth={5}
            fontWeight={"bold"}
            fontSize={23}
            textDistance={55}
            spinDuration={0.75}
            textColors={["#eee"]}
            onStopSpinning={() => {
              console.log("Girou");
              setMustSpin(false);
            }}
          />
          <button
            onClick={() => {
              if (!mustSpin) {
                setMustSpin(true);
              }
            }}
            className="spinBtn"
          >
            <FontAwesomeIcon icon={faRotate} />
          </button>
        </div>
      </div>
      <BottomNav />
    </body>
  );
}
