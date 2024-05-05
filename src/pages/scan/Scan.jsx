import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/header/Header";
import BottomNav from "../components/bottomNav/BottomNav";
import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import "./Scan.css"

export default function Scan() {
  const [searchvalue, setSearchValue] = useState("");

  function handleChange(event) {
    setSearchValue(event.target.searchvalue);
  }

  return (
    <body>
      <Header />
      <div className="camScrennContainer">
      <div className="camContainer"></div>
      <div className="inputDescCamContainer">
        <h2 className="qrTitle">Aponte para o QR code <br /> ou</h2>
        <div className="qrSearch">
          <input
            type="text"
            value={searchvalue}
            onChange={handleChange}
            placeholder="Digite o código..."
          />
          <FontAwesomeIcon className="qrIcon" icon={faBarcode} />
        </div>
      </div>
      </div>
      <BottomNav />
    </body>
  );
}
