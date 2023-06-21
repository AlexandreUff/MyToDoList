export default function Button(props) {
  return (
    <button className="main-button" title={props.text} onClick={props.action}>
      {props.icon && props.icon}
      {props.text}
    </button>
  );
}
