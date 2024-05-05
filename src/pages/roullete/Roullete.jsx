import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import BottomNav from "../components/bottomNav/BottomNav";
import Header from "../components/header/Header";
import "./roullete.css";

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
  const [confirmSpin, setConfirmSpin] = useState(false);

  const handleSpinClick = () => {
    if (!mustSpin && !confirmSpin) {
      setConfirmSpin(true);
    } else if (!mustSpin && confirmSpin) {
      setMustSpin(true);
      setConfirmSpin(false);
    }
  };

  const handleConfirmSpin = (confirm) => {
    if (confirm) {
      setMustSpin(true);
      setConfirmSpin(false);
    } else {
      setConfirmSpin(false);
    }
  };

  return (
    <body>
      <Header />
      <div className="betContainer">
        <div className="titleAndTxtContainer">
          <h2>Roleta NFT</h2>
          <p>Aposte seus WTKs e tenha a chance de conseguir NFTs raros</p>
        </div>

        <div className={`roulleteContainer ${mustSpin ? "spinning" : ""}`}>
          <div className="roullete">
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
                console.log("Roleta girada");
                setMustSpin(false);
              }}
            />
            {!mustSpin && (
              <FontAwesomeIcon className="blockedRoulleteIcon" icon={faLock} />
            )}
          </div>
          <button onClick={handleSpinClick} className="spinBtn">
            150 WTKs
          </button>
        </div>

        {confirmSpin && (
          <div className="confirmationModal">
            <p>Deseja realmente girar a roleta?</p>
            <div className="ConfirmBtns">
              <button
                className="ConfirmBtnsNo"
                onClick={() => handleConfirmSpin(false)}
              >
                Não
              </button>
              <button
                className="ConfirmBtnsYes"
                onClick={() => handleConfirmSpin(true)}
              >
                Sim
              </button>
            </div>
          </div>
        )}
      </div>
      <BottomNav />
    </body>
  );
}
