import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/header/Header";
import BottomNav from "../components/bottomNav/BottomNav";
import { faQrcode, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Html5QrcodeScanner } from "html5-qrcode";
import "./Scan.css";

export default function Scan() {
  const [searchvalue, setSearchValue] = useState("");
  const [scanResult, setScanResult] = useState(null);

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
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.log(err);
    }
  }, []);

  return (
    <body>
      <Header />
      <div className="camScrennContainer">
        {scanResult ? (
          <div className="camContainer">
            <p>Sucesso: {scanResult}</p>
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
                setScanResult(searchvalue);
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
