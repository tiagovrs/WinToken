import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faStore,
  faSackDollar,
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
        <p>Home</p>
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
        <FontAwesomeIcon className="btnIcon" icon={faStore} />
        <p>Loja</p>
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
