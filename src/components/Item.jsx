import { IcoEdit, IcoTrash } from "./Icons";

export default function Item(props){

    const checkItem = (e) => {
        const parentElement = e.target.parentElement
        parentElement.classList.toggle("done")
    }

    const handleEvent = (event, action) => {
        event.stopPropagation()
        action()
    }

    return (
        <div className={`item ${props.done && "done"}`}>
            <input type="checkbox" onChange={e => checkItem(e)} checked={props.done} />
            <h3>
                {props.text}
            </h3>
            <button className="tools-content first" title="Editar item" onClick={(e) => {handleEvent(e, () =>  props.editMethod(1,props.text))}}>
                <IcoEdit />
            </button>
            <button className="tools-content first" title="Excluir item" onClick={(e) => {handleEvent(e, props.deleteMethod)}}>
                <IcoTrash />
            </button>
        </div>
    )
}