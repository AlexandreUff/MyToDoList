import { IcoClip, IcoEdit, IcoTrash } from "./Icons";

export default function List(props){
    return (
        <div className="list" title={`Nesta lista diz: ${props.text}`}>
            <div className="ico-list-content">
                <IcoClip/>
            </div>
            <button className="tools-content first" title="Excluir lista">
                <IcoTrash />
            </button>
            <button className="tools-content second" title="Editar lista">
                <IcoEdit />
            </button>
            <h2>
                {props.text}
            </h2>
        </div>
    )
}