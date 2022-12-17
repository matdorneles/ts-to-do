import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

function Button() {
  const clipboardIcon = <FontAwesomeIcon icon={ faClipboardList } />

  return (
    <div className="button">
      <a><i>{ clipboardIcon }</i>Criar Tarefa</a>
    </div>
  )
}

export default Button;