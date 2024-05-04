import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <h1 className="title">
        <span className="win">WIN</span>TOKEN
      </h1>
      <div className="hudContainer">
        <FontAwesomeIcon className="bellIcon" icon={faBell} />
        <div className="hasNotification"></div>
      </div>
    </div>
  );
}
