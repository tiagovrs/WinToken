import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faStore, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import "./BottomNav.css";

export default function BottomNav() {
  return (
    <div className="bottomContainer">
      <Link to="/loja" className="navBtn">
        <FontAwesomeIcon className="btnIcon" icon={faStore} />
        <p>Loja</p>
      </Link>

      <Link to="/scan" className="navBtn selected">
        <FontAwesomeIcon className="btnIcon" icon={faQrcode} />
        <p>Ler</p>
      </Link>

      <Link to="/apostas" className="navBtn">
        <FontAwesomeIcon className="btnIcon" icon={faSackDollar} />
        <p>Apostar</p>
      </Link>
    </div>
  );
}
