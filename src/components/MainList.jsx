import { useState } from "react";
import Button from "./Button";
import FlexModal from "./FlexModal";
import { IcoCheckConfirm, IcoClipBoardChecked, IcoEmail, IcoX } from "./Icons";
import Item from "./Item";
import NavBar from "./NavBar";

export default function MainHome(props){

    const [modal, setModal] = useState(false)

    const createListModal = () => {
        return (
            <FlexModal message={"Digite o nome de seu novo item:"}>
                <input type="text" style={{
                    background:"transparent",
                    width:"90%",
                    height:"25px",
                    borderRadius:"5px",
                    border:"#E8F6EF solid 3px",
                    textAlign:"center",
                    color:"#E8F6EF",
                    fontSize:"2rem",
                    fontWeight: "600"
                }} />
                <div style={{
                    display:"flex",
                    justifyContent:"space-evenly",
                    alignItems:"center",
                    marginTop:"10px",
                }}>
                    <Button icon={<IcoCheckConfirm/>} text={"Criar"} action={()=>{console.log("itsWorks")}} />
                    <Button icon={<IcoX/>} text={"Cancelar"} action={()=>{setModal(!modal)}} />
                </div>
            </FlexModal>
        )
    }

    return (
        <main className="main-list">
            <NavBar />
            <section>
                <div className="buttons-content">
                    <Button icon={<IcoClipBoardChecked/>} text={"Criar um item"} action={()=>{setModal(!modal)}} />
                    <Button icon={<IcoEmail/>} text={"Enviar esta lista por e-mail"} action={()=>{console.log("itsWorks too")}} />
                </div>
                <div className="item-area">
                    <Item text="Este é um item very bom demais da conta partner" />
                    <Item text="Este é um item very bom demais da conta partner" />
                    <Item text="Este é um item very bom demais da conta partner" />
                </div>
            </section>
            {modal && createListModal()}
        </main>
    )
}