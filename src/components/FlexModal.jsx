export default function FlexModal(props){
    return (
        <div className="ground-modal effect">
            <div className="modal">
                <h3>{props.message}</h3>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}