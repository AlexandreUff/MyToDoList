import { useEffect, useState } from "react";
import Button from "./Button";
import FlexModal from "./FlexModal";
import { IcoCheckConfirm, IcoStar, IcoX } from "./Icons";
import List from "./List";
import NavBar from "./NavBar";

export default function MainHome(props){

    const [showCreateModal, setShowCreateModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

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
                    <Button icon={<IcoX/>} text={"Cancelar"} action={()=>{setShowCreateModal(!showCreateModal)}} />
                </div>
            </FlexModal>
        )
    }

    const editListModal = () => {
        return (
            <FlexModal message={"Altere o nome lista:"}>
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
                    <Button icon={<IcoX/>} text={"Cancelar"} action={()=>{setShowEditModal(!showEditModal)}} />
                </div>
            </FlexModal>
        )
    }

    const deleteListModal = () => {
        return (
            <FlexModal message={"Tem certeza que deseja excluir essa lista?"}>
                <div style={{
                    display:"flex",
                    justifyContent:"space-evenly",
                    alignItems:"center",
                    marginTop:"10px",
                }}>
                    <Button icon={<IcoCheckConfirm/>} text={"Criar"} action={()=>{console.log("itsWorks")}} />
                    <Button icon={<IcoX/>} text={"Cancelar"} action={()=>{setShowDeleteModal(!showDeleteModal)}} />
                </div>
            </FlexModal>
        )
    }

    return (
        <main className="main-home">
            <NavBar />
            <section>
                <Button icon={<IcoStar/>} text={"Criar uma lista"} action={()=>{setShowCreateModal(!showCreateModal)}} />
                <div className="list-area">
                    <List
                        text="Capinar um lote esta semana porque o negócio"
                        editMethod={() => setShowEditModal(!showEditModal)}
                        deleteMethod={() => setShowDeleteModal(!showDeleteModal)}
                    />
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
            {showCreateModal && createListModal()}
            {showEditModal && editListModal()}
            {showDeleteModal && deleteListModal()}
        </main>
    )
}