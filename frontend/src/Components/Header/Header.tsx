import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

function Header() {

  const taskIcon = <FontAwesomeIcon icon={faList} />

  return(
    <div className="header">
      <span className="header-title"><i>{ taskIcon }</i>To Do</span>
    </div>
  );
}

export default Header;
