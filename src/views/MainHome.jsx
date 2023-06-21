import { useEffect, useState } from "react";
import Button from "../components/Button";
import FlexModal from "../components/FlexModal";
import { IcoCheckConfirm, IcoStar, IcoX } from "../components/Icons";
import List from "../components/List";
import NavBar from "../components/NavBar";
import StorageService from "../services/StorageService";
import { useLocation, useNavigate } from "react-router-dom";

export default function MainHome(props) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [datas, setDatas] = useState([]);

  const [dataToBeHandled, setDataToBeHandled] = useState("");

  const location = useLocation();
  const currentRoute = location.pathname.replace(process.env.PUBLIC_URL, "");

  useEffect(() => {
    const datas = StorageService.get("todo");
    if (datas) setDatas([...datas]);
  }, []);

  const navigate = useNavigate();

  const Navigation = (id) => {
    navigate(`/list/${id}`);
  };

  const lettersExcessMessage = (max) => {
    return (
      <p style={{ marginBottom: "10px", color: "red" }}>
        Não pode exceder mais de {max} caractere(s)! Diminua para criar/editar
        sua lista.
      </p>
    );
  };

  const saveData = () => {
    const dataToSave = {
      id: datas.length + 1,
      name: dataToBeHandled,
      itens: [],
    };

    StorageService.save("todo", [...datas, dataToSave]);

    setDataToBeHandled("");
    Navigation(datas.length + 1);
  };

  const removeData = () => {
    const newDatas = [...datas];
    newDatas.splice(dataToBeHandled - 1, 1);
    const reorderedDatas = newDatas.map((newData, i) => {
      return { ...newData, id: i + 1 };
    });

    StorageService.save("todo", [...reorderedDatas]);

    setDatas([...reorderedDatas]);
    setShowDeleteModal(!showDeleteModal);
  };

  const editData = () => {
    const newDatas = [...datas];
    newDatas[dataToBeHandled.id - 1].name = dataToBeHandled.name;

    StorageService.save("todo", [...newDatas]);

    setDatas([...newDatas]);
    setShowEditModal(!showEditModal);
  };

  const renderItems = () => {
    return datas.map((list, i) => {
      return (
        <List
          key={i}
          text={list.name}
          editMethod={() => {
            setDataToBeHandled({
              id: list.id,
              name: list.name,
            });
            setShowEditModal(!showEditModal);
          }}
          deleteMethod={() => {
            setDataToBeHandled(list.id);
            setShowDeleteModal(!showDeleteModal);
          }}
          linkNav={list.id}
        />
      );
    });
  };

  const createListModal = () => {
    const maxCharacters = 72;

    return (
      <FlexModal message={"Digite o nome de sua nova lista:"}>
        {dataToBeHandled.length > maxCharacters &&
          lettersExcessMessage(maxCharacters)}
        <input
          type="text"
          style={{
            background: "transparent",
            width: "90%",
            height: "25px",
            borderRadius: "5px",
            border: "#E8F6EF solid 3px",
            textAlign: "center",
            color: "#E8F6EF",
            fontSize: "2rem",
            fontWeight: "600",
          }}
          autoFocus
          value={dataToBeHandled}
          onChange={(e) => setDataToBeHandled(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          {dataToBeHandled.length <= maxCharacters && (
            <Button
              icon={<IcoCheckConfirm />}
              text={"Criar"}
              action={() => {
                saveData();
              }}
            />
          )}
          <Button
            icon={<IcoX />}
            text={"Cancelar"}
            action={() => {
              setShowCreateModal(!showCreateModal);
              setDataToBeHandled("");
            }}
          />
        </div>
      </FlexModal>
    );
  };

  const editListModal = () => {
    const maxCharacters = 72;

    return (
      <FlexModal message={"Altere o nome lista:"}>
        {dataToBeHandled.name.length > maxCharacters &&
          lettersExcessMessage(maxCharacters)}
        <input
          type="text"
          style={{
            background: "transparent",
            width: "90%",
            height: "25px",
            borderRadius: "5px",
            border: "#E8F6EF solid 3px",
            textAlign: "center",
            color: "#E8F6EF",
            fontSize: "2rem",
            fontWeight: "600",
          }}
          autoFocus
          value={dataToBeHandled.name}
          onChange={(e) =>
            setDataToBeHandled({
              id: dataToBeHandled.id,
              name: e.target.value,
            })
          }
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          {dataToBeHandled.name.length <= maxCharacters && (
            <Button
              icon={<IcoCheckConfirm />}
              text={"Alterar"}
              action={editData}
            />
          )}
          <Button
            icon={<IcoX />}
            text={"Cancelar"}
            action={() => {
              setShowEditModal(!showEditModal);
            }}
          />
        </div>
      </FlexModal>
    );
  };

  const deleteListModal = () => {
    return (
      <FlexModal message={"Tem certeza que deseja excluir essa lista?"}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <Button
            icon={<IcoCheckConfirm />}
            text={"Remover"}
            action={() => {
              removeData();
            }}
          />
          <Button
            icon={<IcoX />}
            text={"Cancelar"}
            action={() => {
              setShowDeleteModal(!showDeleteModal);
            }}
          />
        </div>
      </FlexModal>
    );
  };

  return (
    <main className="main-home">
      <NavBar />
      <section>
        <Button
          icon={<IcoStar />}
          text={"Criar uma lista"}
          action={() => {
            setShowCreateModal(!showCreateModal);
          }}
        />
        <div className="list-area">
          {datas.length > 0 ? (
            renderItems()
          ) : (
            <>
              <div className="about-content">
                <h4>Bem-vindo ao My ToDo List!</h4>
                <p>
                  Para que se possa criar uma nova lista, basta clicar no botão{" "}
                  <span>Criar uma lista</span> logo acima. Com ele, você pode
                  criar seus itens que irão compor essa lista e, se desejar,
                  pode também alterar seus nomes ou mesmo excluí-los.
                </p>
                <p>
                  Caso tenha dúvidas ou queira aprender melhor a usar o{" "}
                  <span>My ToDo List</span>, basta clicar no menu{" "}
                  <span>Sobre</span> logo acima. Pois lá contém todas as
                  informações necessárias para usar esta maravilhosa ferramenta.
                </p>
              </div>
            </>
          )}
        </div>
      </section>
      {(showCreateModal || currentRoute !== "/") && createListModal()}
      {showEditModal && editListModal()}
      {showDeleteModal && deleteListModal()}
    </main>
  );
}
