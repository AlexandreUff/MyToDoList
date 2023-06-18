export default function Button(props){

    return (
        <button className="main-button" title={props.text}>
                {props.icon && props.icon}{props.text}
        </button>
    )
}