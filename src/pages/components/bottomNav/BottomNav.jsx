import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faStore,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import "./bottomNav.css";

export default function BottomNav() {
  return (
    <div className="bottomContainer">
      <Link
        to="/loja"
        className={`navBtn ${
          useLocation().pathname === "/loja" ? "selected" : ""
        }`}
      >
        <FontAwesomeIcon className="btnIcon" icon={faStore} />
        <p>Loja</p>
      </Link>

      <Link
        to="/scan"
        className={`navBtn ${
          useLocation().pathname === "/scan" ? "selected" : ""
        }`}
      >
        <FontAwesomeIcon className="btnIcon" icon={faQrcode} />
        <p>Ler</p>
      </Link>

      <Link
        to="/apostas"
        className={`navBtn ${
          useLocation().pathname === "/apostas" ? "selected" : ""
        }`}
      >
        <FontAwesomeIcon className="btnIcon" icon={faSackDollar} />
        <p>Apostar</p>
      </Link>
    </div>
  );
}
