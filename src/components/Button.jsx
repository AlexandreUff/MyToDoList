export default function Button(props){

    return (
        <button className="main-button" title={props.title}>
                {props.children}
        </button>
    )
}