import { IcoExclamation } from "./Icons";

export default function FlexModal(props){
    return (
        <div className="ground-modal effect">
            <div className="modal">
                <div className="ico-content">
                    <IcoExclamation />
                </div>
                <h3>
                    {props.message}
                </h3>
                <div>
                    {/* {props.children} */}
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}