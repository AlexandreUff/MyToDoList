import { IcoClipBoardEmpty, IcoEdit, IcoTrash } from "./Icons";

export default function Item(props){
    return (
        <div className="item">
            <div className="ico-item-content">
                <IcoClipBoardEmpty />
            </div>
            <h3>
                {props.text}
            </h3>
            <button className="tools-content first" title="Editar item">
                <IcoEdit />
            </button>
            <button className="tools-content first" title="Excluir item">
                <IcoTrash />
            </button>
        </div>
    )
}