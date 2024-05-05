import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faCartShopping,
  faDice,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import "./BottomNav.css";

export default function BottomNav() {
  return (
    <div className="bottomContainer">
      <Link
        to="/"
        className={`navBtn ${
          useLocation().pathname === "/" ? "selected" : ""
        }`}
      >
        <FontAwesomeIcon className="btnIcon" icon={faHome} />
        <p>Início</p>
      </Link>

      <Link
        to="/scan"
        className={`navBtn ${
          useLocation().pathname === "/scan" ? "selected" : ""
        }`}
      >
        <FontAwesomeIcon className="btnIcon" icon={faQrcode} />
        <p>Scan</p>
      </Link>

      <Link
        to="/loja"
        className={`navBtn ${
          useLocation().pathname === "/loja" ? "selected" : ""
        }`}
      >
        <FontAwesomeIcon className="btnIcon" icon={faCartShopping} />
        <p>Loja</p>
      </Link>

      <Link
        to="/roleta"
        className={`navBtn ${
          useLocation().pathname === "/roleta" ? "selected" : ""
        }`}
      >
        <FontAwesomeIcon className="btnIcon" icon={faDice} />
        <p>Roleta</p>
      </Link>

    </div>
  );
}
