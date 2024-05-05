import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <Link to="/" className="title">
        <span className="winTxt">WIN</span>TOKEN
      </Link>
      <Link to="/perfil" className="profileBtn">
        <FontAwesomeIcon className="bellIcon" icon={faUser} />
      </Link>
    </div>
  );
}
