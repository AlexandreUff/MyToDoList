import { useEffect, useState } from "react";
import Button from "./Button";
import FlexModal from "./FlexModal";
import { IcoCheckConfirm, IcoClipBoardChecked, IcoEmail, IcoX } from "./Icons";
import Item from "./Item";
import NavBar from "./NavBar";
import StorageService from "../services/StorageService";
import { useParams } from "react-router-dom";

export default function MainHome(props){

    const { listId } = useParams()
    const listIdToNumber = +listId

    const [showCreateModal, setShowCreateModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [datas, setDatas] = useState([])

    const storageDatas = StorageService.get("todo")

    useEffect(() => {
        console.log("itens", storageDatas)
        if(storageDatas) setDatas([...storageDatas[listIdToNumber-1].itens])
    },[])

    const saveData = () => {
        const inputValue = document.getElementById("create-list")
        const dataToSave = {
            id: datas.length+1,
            name: inputValue.value,
            order: datas.length+1,
        }

        const newStorageDatas = [...storageDatas]

        newStorageDatas[listIdToNumber-1].itens.push(dataToSave)

        StorageService.save("todo",
            [
            ...newStorageDatas,
            ]
        )
        setDatas([...datas, dataToSave])
        setShowCreateModal(!showCreateModal)
    }

    const createItemModal = () => {
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

    return (
        <main className="main-list">
            <NavBar />
            <section>
                <div className="buttons-content">
                    <Button icon={<IcoClipBoardChecked/>} text={"Criar um item"} action={()=>{setShowCreateModal(!showCreateModal)}} />
                    <Button icon={<IcoEmail/>} text={"Enviar esta lista por e-mail"} action={()=>{console.log("itsWorks too")}} />
                </div>
                <div className="item-area">
                    {/* <Item text="Este é um item very bom demais da conta partner" />
                    <Item text="Este é um item very bom demais da conta partner" />
                    <Item text="Este é um item very bom demais da conta partner" /> */}
                    {datas.map((item, i) => {
                        return <Item
                                    key={i}
                                    text={item.name}
                                    editMethod={() => {
                                        /* setDataHandler({
                                            id: item.id,
                                            name:item.name
                                        })
                                        setShowEditModal(!showEditModal) */
                                    }}
                                    deleteMethod={() => {
                                        /* setDataHandler(item.id)
                                        setShowDeleteModal(!showDeleteModal) */
                                    }}
                                />
                    })}
                </div>
            </section>
            {showCreateModal && createItemModal()}
        </main>
    )
}