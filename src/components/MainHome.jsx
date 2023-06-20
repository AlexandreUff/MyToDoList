import { useEffect, useState } from "react";
import Button from "./Button";
import FlexModal from "./FlexModal";
import { IcoCheckConfirm, IcoStar, IcoX } from "./Icons";
import List from "./List";
import NavBar from "./NavBar";
import StorageService from "../services/StorageService";

export default function MainHome(props){

    const [showCreateModal, setShowCreateModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [datas, setDatas] = useState([])

    const [editData, setEditData] = useState("")

    useEffect(() => {
        const datas = StorageService.get("todo")
        if(datas) setDatas([...datas])
        console.log("Todos os dados", datas)
    },[])

    useEffect(()=>{
        console.log("SHOWME", editData)
        setShowEditModal(!showEditModal)
    },[editData])

    const saveData = () => {
        const inputValue = document.getElementById("create-list")
        const dataToSave = {
            id: datas.length+1,
            name: inputValue.value,
            itens: []
        }

        StorageService.save("todo",
            [
            ...datas,
                dataToSave
            ]
        )
        setDatas([...datas, dataToSave])
        setShowCreateModal(!showCreateModal)
        console.log("DADOS TOTAIS:",datas.length)
    }

    const removeData = () => {
        const newDatas = [...datas]
        newDatas.splice(editData-1, 1)
        console.log("Indice", editData)
        console.log("dados antigos", datas)
        const reorderedDatas = newDatas.map((newData, i) => {
            return {...newData, id: i+1}
        })

        StorageService.save("todo",
                [...reorderedDatas]
        )
        console.log("dados novos", reorderedDatas)

        setDatas([...reorderedDatas])
        setShowDeleteModal(!showDeleteModal)
    }

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
                }}
                    id="create-list"
                 />
                <div style={{
                    display:"flex",
                    justifyContent:"space-evenly",
                    alignItems:"center",
                    marginTop:"10px",
                }}>
                    <Button icon={<IcoCheckConfirm/>} text={"Criar"} action={()=>{saveData()}} />
                    <Button icon={<IcoX/>} text={"Cancelar"} action={()=>{setShowCreateModal(!showCreateModal)}} />
                </div>
            </FlexModal>
        )
    }

    const editListModal = (datas) => {
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
                    }}
                    value={datas.name}
                    onChange={e => setEditData(e.target.value)}
                />
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
                    <Button icon={<IcoCheckConfirm/>} text={"Remover"} action={()=>{removeData()}} />
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
                    {datas.map((list, i) => {
                        return <List
                                    key={i}
                                    text={list.name}
                                    editMethod={(id, name) => setEditData({id, name})}
                                    deleteMethod={() => {
                                        setEditData(list.id)
                                        console.log("Na hora de deletar",list.id)
                                        setShowDeleteModal(!showDeleteModal)
                                    }}
                                />
                    })}
                </div>
            </section>
            {showCreateModal && createListModal()}
            {showEditModal && (editData && editListModal(editData))}
            {showDeleteModal && deleteListModal()}
        </main>
    )
}