import { IcoClip, IcoEdit, IcoTrash } from "./Icons";
import { useNavigate } from "react-router-dom";

export default function List(props) {
  const navigate = useNavigate();

  const Navigation = (link) => {
    navigate(`/list/${link}`);
  };

  const handleEvent = (event, action) => {
    event.stopPropagation();
    action();
  };

  return (
    <div
      className={`list ${props.done && "done"}`}
      title={`Nesta lista diz: ${props.text}`}
      onClick={() => {
        Navigation(props.linkNav);
      }}
    >
      <div className="ico-list-content">
        <IcoClip />
      </div>
      <button
        className="tools-content first"
        title="Excluir lista"
        onClick={(e) => {
          handleEvent(e, props.deleteMethod);
        }}
      >
        <IcoTrash />
      </button>
      <button
        className="tools-content second"
        title="Editar lista"
        onClick={(e) => {
          handleEvent(e, () => props.editMethod(1, props.text));
        }}
      >
        <IcoEdit />
      </button>
      <h2>{props.text}</h2>
    </div>
  );
}
