import { IcoExclamation } from "./Icons";

export default function FlexModal(props){
    return (
        <div className="ground-modal effect">
            <div className="modal">
                <div className="ico-content">
                    <IcoExclamation />
                </div>
                <h3>
                    {/* {props.message} */}
                    Teste testando tudo aqui porque everything induz à lokura
                </h3>
                <div>
                    {/* {props.children} */}
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}