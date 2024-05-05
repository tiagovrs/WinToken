import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/header/Header";
import BottomNav from "../components/bottomNav/BottomNav";
import { faQrcode, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Html5QrcodeScanner } from "html5-qrcode";
import "./Scan.css";
import { reedemManagerAddress } from "../../contracts/ReedemManagerAbi";
import axios from "axios";
import { apiKey } from "../../config/api/axios";
import AlertDialog from "./components/AlertDialog";

export default function Scan() {
  const [searchvalue, setSearchValue] = useState("");
  const [scanResult, setScanResult] = useState(null);
  const [scannerObject, setScannerObject] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const reedemTokens = async (reedemData) => {
    try {
      const response = await axios.post("https://protocol-sandbox.lumx.io/v2/transactions/custom", 
      {
        "contractAddress": reedemManagerAddress,
        "operations": [
          {
            "functionSignature": "receiveReedem(uint256, uint256)",
            "argumentsValues": [
                reedemData.index,
                reedemData.hashKey
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
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      try {
        reedemTokens(JSON.parse(result))
        setScanResult(result);
        scanner.clear();
      } catch(err) {
        setScanResult(undefined);
        scanner.render();
      }
    }

    function error(err) {
      console.log(err);
    }
  }, []);


  function submitCode(scanner) {
    try {
      const result = searchvalue.split('-');
      reedemTokens({
        index: parseInt(result[1]),
        hashKey: parseInt(result[0])
      })
      setScanResult(result);
    } catch(err) {
      console.log(err);
      setScanResult(undefined);
    }
  }

  return (
    <body>
      <Header />
      <div className="camScrennContainer">
        {scanResult ? (
          <div className="camContainer">
            <AlertDialog></AlertDialog>
          </div>
        ) : (
          <div className="camContainer " id="reader"></div>
        )}

        <div className="inputDescCamContainer">
          <h2 className="qrTitle">
          Aponte para o QR code
          </h2>
          <div className="linha-horizontal"><span>ou</span></div>
          <div className="qrSearch">
            <FontAwesomeIcon className="qrIcon" icon={faQrcode} />
            <input
              type="text"
              value={searchvalue}
              onChange={(event) => {
                setSearchValue(event.target.value);
              }}
              placeholder="Digite o código..."
            />
            <button
              className="sendCodeBtn"
              onClick={() => {
                submitCode();
              }}
            >
              <FontAwesomeIcon className="sendCodeIcon" icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <BottomNav />
    </body>
  );
}
