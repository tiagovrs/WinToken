import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClover,
  faQrcode,
  faCartShopping,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header/Header";
import "./Home.css";
import BottomNav from "../components/bottomNav/BottomNav";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { provider } from "../../config/api/axios";
import { ethers } from "ethers";
import winTokenAbi, { erc20TokenAddress } from "../../contracts/WinTokenAbi";

function Private() {
  const [wtkQtd, setWtkQtd] = useState(0);
  const user = JSON.parse(localStorage.getItem('user'));

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Sign Out"))
      .catch((error) => console.log(error));
  };

  const handleGetBalance = async () => {
    const contract = new ethers.Contract(erc20TokenAddress, winTokenAbi, provider);
    setWtkQtd(ethers.formatEther(await contract.balanceOf(user.wallet)) * 10**18);
  };

  handleGetBalance();

  return (
    <body>
      <Header />

      <div className="homeContainer">
        <div className="balanceContainer">
          <h2>Seu saldo:</h2>
          <h2>{wtkQtd} WTKs</h2>
        </div>

        <div className="luckAndQrContainer">
          <Link to="/roleta" className="luckContainer">
            <div className="luckTitleContainer">
              <h2 className="luckTitle">Teste sua sorte</h2>
              <p className="luckTxt">Aposte WTKs e concorra a NFTs</p>
            </div>

            <div className="luckIconContainer">
              <FontAwesomeIcon className="luckIcon" icon={faClover} />
            </div>
          </Link>

          <Link to="/scan" className="qrContainer">
            <div className="qrTitleContainer">
              <h2 className="qrTxt">Escanear QR Code</h2>
            </div>

            <div className="qrIconContainer">
              <FontAwesomeIcon className="qrIcon" icon={faQrcode} />
            </div>
          </Link>
        </div>

        <Link to="/loja" className="shopAndAlbumContainer">
          <div className="shopAlbumIconContainer">
            <FontAwesomeIcon
              className="shopAlbumIconIcon"
              icon={faCartShopping}
            />
          </div>

          <div className="txtShopAlbumContainer">
            <h2 className="shopAndAlbumTitle">Loja de NFTs</h2>
            <p className="shopAndAlbumParagraph">
              Compre NFTs e complete seu álbum
            </p>
          </div>
        </Link>

        <Link to="/album" className="shopAndAlbumContainer">
          <div className="shopAlbumIconContainer">
            <FontAwesomeIcon className="shopAlbumIconIcon" icon={faImages} />
          </div>
          
          <div className="txtShopAlbumContainer">
            <h2 className="shopAndAlbumTitle">Album de NFTs</h2>
            <p className="shopAndAlbumParagraph">
              Acesse seu álbum e acompanhe seu processo
            </p>
          </div>
        </Link>
      </div>
      <BottomNav /> 
    </body>
  );
}
export default Private;
