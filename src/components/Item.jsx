import { IcoEdit, IcoTrash } from "./Icons";

export default function Item(props){

    const checkItem = (e) => {
        const parentElement = e.target.parentElement
        parentElement.classList.toggle("done")
    }

    return (
        <div className="item">
            <input type="checkbox" onChange={e => checkItem(e)} />
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