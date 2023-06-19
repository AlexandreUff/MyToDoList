import { useState } from "react";
import Button from "./Button";
import FlexModal from "./FlexModal";
import { IcoCheckConfirm, IcoStar, IcoX } from "./Icons";
import List from "./List";
import NavBar from "./NavBar";

export default function MainHome(props){

    const [modal, setModal] = useState(false)

    const createListModal = () => {
        return (
            <FlexModal message={"Digite o nome de sua nova lista:"}>
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
        <main className="main-home">
            <NavBar />
            <section>
                <Button icon={<IcoStar/>} text={"Criar uma lista"} action={()=>{setModal(!modal)}} />
                <div className="list-area">
                    <List text="Capinar um lote esta semana porque o negócio" />
                    <List text="Capinar um lote esta semana porque o negócio" />
                    <List text="Capinar um lote esta semana porque o negócio" />
                    <List text="Capinar um lote esta semana porque o negócio" />
                    <List text="Capinar um lote esta semana porque o negócio" />
                    <List text="Capinar um lote esta semana porque o negócio" />
                    <List text="Capinar um lote esta semana porque o negócio" />
                    <List text="Capinar um lote esta semana porque o negócio" />
                    <List text="Capinar um lote esta semana porque o negócio" />
                </div>
            </section>
            {modal && createListModal()}
        </main>
    )
}