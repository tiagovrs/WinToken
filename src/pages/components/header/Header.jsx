import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import "./Header.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <Link to="/" className="title">
        <span className="win">WIN</span>TOKEN
      </Link>
      <div className="hudContainer">
        <FontAwesomeIcon className="bellIcon" icon={faBell} />
        <div className="hasNotification"></div>
        <FontAwesomeIcon className="bellIcon" icon={faUser} />
      </div>
    </div>
  );
}
