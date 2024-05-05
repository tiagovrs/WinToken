import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Wheel } from "react-custom-roulette";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import BottomNav from "../components/bottomNav/BottomNav";
import Header from "../components/header/Header";
import "./roullete.css";
import axios from "axios";
import { apiKey } from "../../config/api/axios";
import { winNft } from "../../contracts/WinNFT";
import { ethers } from "ethers";
import { provider } from "../../config/api/axios";
import winTokenAbi, { erc20TokenAddress } from "../../contracts/WinTokenAbi";

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

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


export default function Bets() {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");
  const [mint, setMint] = useState(false);
  const [mustSpin, setMustSpin] = useState(false);
  const [confirmSpin, setConfirmSpin] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [rollEnabled, setRollEnabled] = useState(false);

  const handleSpinClick = () => {
    if (!mustSpin && !confirmSpin) {
      setConfirmSpin(true);
    } else if (!mustSpin && confirmSpin) {
      setMustSpin(true);
      setConfirmSpin(false);
    }
  };

  const handleGetBalance = async () => {
    const contract = new ethers.Contract(erc20TokenAddress, winTokenAbi, provider);
    const wTks = ethers.formatEther(await contract.balanceOf(user.wallet)) * 10**18;
    if (wTks >= 150) {
      setRollEnabled(true);
    }
  };

  handleGetBalance();

  const mintNft = async (reedemData) => {
    const response = await axios.post("https://protocol-sandbox.lumx.io/v2/transactions/custom", 
    {
      "contractAddress": winNft,
      "operations": [
        {
          "functionSignature": "safeMint(address)",
          "argumentsValues": [
            user.wallet
          ],
          "messageValue": 0
        }
      ],
      "walletId": user.walletId
    },
    {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    })
    
    return response.data;
  };

  const burnWtk = async (reedemData) => {
    const response = await axios.post("https://protocol-sandbox.lumx.io/v2/transactions/custom", 
    {
      "contractAddress": erc20TokenAddress,
      "operations": [
        {
          "functionSignature": "burn(uint256)",
          "argumentsValues": [
            150
          ],
          "messageValue": 0
        }
      ],
      "walletId": user.walletId
    },
    {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    })
    
    return response.data;
  };

  const finishSpin = async () => {
    if(confirm("Parabéns, você recebeu um NFT! Deseja visualizar o NFT?")) {
      window.open(`https://testnets.opensea.io/${user.wallet}`)
    }
  }

  const handleConfirmSpin = async (confirm) => {
    try {
      if (confirm) {
        try {
          setConfirmSpin(false);
          setMint(true);
          const response = await mintNft();
          const burnResponse = await burnWtk();
          
          setMint(false);
          setMustSpin(true);
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
      } else {
        setConfirmSpin(false);
      }
    } catch (error) {
      alert('Erro ao girar a roleta', error)
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

        
        <div style={{display: mint ? "flex" : "none", alignItems: "center", justifyContent: "center", height: "100%", width: "100%"}}>
          <ClipLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      
        <div style={{display: !mint ? "flex" : "none"}} className={`roulleteContainer ${mustSpin ? "spinning" : ""}`}>
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
              onStopSpinning={async () => {
                await finishSpin();
                setMustSpin(false);
              }}
            />
            {!mustSpin && (
              <FontAwesomeIcon className="blockedRoulleteIcon" icon={faLock} />
            )}
          </div>
          <button onClick={handleSpinClick} disabled={!rollEnabled} style={{background: !rollEnabled ? "gray" : "#a25ca4" }} className="spinBtn">
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
