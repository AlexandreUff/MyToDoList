import { useEffect, useState } from "react";
import Button from "./Button";
import FlexModal from "./FlexModal";
import { IcoCheckConfirm, IcoStar, IcoX } from "./Icons";
import List from "./List";
import NavBar from "./NavBar";
import StorageService from "../services/StorageService";
import { useLocation, useNavigate } from "react-router-dom";

export default function MainHome(props){

    const [showCreateModal, setShowCreateModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [datas, setDatas] = useState([])

    const [dataHandler, setDataHandler] = useState("")

    const location = useLocation()
    const currentRoute = location.pathname.replace(process.env.PUBLIC_URL, '')  

    useEffect(() => {
        const datas = StorageService.get("todo")
        if(datas) setDatas([...datas])
    },[])

    const navigate = useNavigate()

    const Navigation = (id) => {
        navigate(`/list/${id}`)
    }

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

        Navigation(datas.length+1)
    }

    const removeData = () => {
        const newDatas = [...datas]
        newDatas.splice(dataHandler-1, 1)
        const reorderedDatas = newDatas.map((newData, i) => {
            return {...newData, id: i+1}
        })

        StorageService.save("todo",
                [...reorderedDatas]
        )

        setDatas([...reorderedDatas])
        setShowDeleteModal(!showDeleteModal)
    }

    const editData = () => {
        const newDatas = [...datas]
        newDatas[dataHandler.id-1].name = dataHandler.name

        StorageService.save("todo",
                [...newDatas]
        )

        setDatas([...newDatas])
        setShowEditModal(!showEditModal)
    }

    const renderItems = () => {
        return datas.map((list, i) => {
                return <List
                            key={i}
                            text={list.name}
                            editMethod={() => {
                                setDataHandler({
                                    id: list.id,
                                    name:list.name
                                })
                                setShowEditModal(!showEditModal)
                            }}
                            deleteMethod={() => {
                                setDataHandler(list.id)
                                setShowDeleteModal(!showDeleteModal)
                            }}
                            linkNav={list.id}
                        />
                })
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
                    autoFocus
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
                    }}
                    autoFocus
                    value={dataHandler.name}
                    onChange={e => setDataHandler({
                        id: dataHandler.id,
                        name: e.target.value
                    })}
                />
                <div style={{
                    display:"flex",
                    justifyContent:"space-evenly",
                    alignItems:"center",
                    marginTop:"10px",
                }}>
                    <Button icon={<IcoCheckConfirm/>} text={"Alterar"} action={editData} />
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
                    {renderItems()}
                </div>
            </section>
            {(showCreateModal || currentRoute !== '/') && createListModal()}
            {showEditModal && editListModal()}
            {showDeleteModal && deleteListModal()}
        </main>
    )
}