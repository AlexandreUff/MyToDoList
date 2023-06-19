export default function FlexModal(props){
    return (
        <div className="ground-modal effect">
            <div className="modal">
                <h3>
                    {/* {props.message} */}
                    Teste testando tudo aqui porque everything induz à lokura
                </h3>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}