import { useEffect, useState } from "react";
import Button from "../components/Button";
import FlexModal from "../components/FlexModal";
import { IcoCheckConfirm, IcoEmail, IcoPlus, IcoX } from "../components/Icons";
import Item from "../components/Item";
import NavBar from "../components/NavBar";
import StorageService from "../services/StorageService";
import { useParams } from "react-router-dom";

export default function MainHome(props) {
  const { listId } = useParams();
  const listIdToNumber = +listId;

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [datas, setDatas] = useState([]);

  const [dataToBeHandled, setDataToBeHandled] = useState("");

  const storageDatas = StorageService.get("todo");

  const listName = storageDatas[listIdToNumber - 1].name;

  useEffect(() => {
    if (
      storageDatas &&
      JSON.stringify(storageDatas[listIdToNumber - 1].itens) !==
        JSON.stringify(datas)
    ) {
      setDatas([...storageDatas[listIdToNumber - 1].itens]);
    }
  }, [storageDatas, listIdToNumber, datas]);

  const closeModal = (stateToCloseModal) => {
    setDataToBeHandled("");
    stateToCloseModal(false);
  }

  const lettersExcessMessage = (max) => {
    return (
      <p style={{ marginBottom: "10px", color: "red" }}>
        Não pode exceder mais de {max} caractere(s)! Diminua para criar/editar
        seu item.
      </p>
    );
  };

  const createItem = () => {
    const dataToSave = {
      id: datas.length + 1,
      name: dataToBeHandled,
      isDone: false,
      order: datas.length + 1,
    };

    const newStorageDatas = [...storageDatas];

    newStorageDatas[listIdToNumber - 1].itens.push(dataToSave);

    StorageService.save("todo", [...newStorageDatas]);
    setDatas([...datas, dataToSave]);
    closeModal(setShowCreateModal)
  };

  const dataHandler = (newDatas) => {
    const newStorageDatas = [...storageDatas];
    newStorageDatas[listIdToNumber - 1].itens.length = 0;
    Array.prototype.push.apply(
      newStorageDatas[listIdToNumber - 1].itens,
      newDatas
    );

    StorageService.save("todo", [...newStorageDatas]);

    setDatas([...newDatas]);
  };

  const removeItem = () => {
    const newDatas = [...datas];
    newDatas.splice(dataToBeHandled - 1, 1);
    const reorderedDatas = newDatas.map((newData, i) => {
      return { ...newData, id: i + 1 };
    });

    dataHandler(reorderedDatas);
    closeModal(setShowDeleteModal)
  };

  const changeItemName = () => {
    const newDatas = [...datas];
    newDatas[dataToBeHandled.id - 1].name = dataToBeHandled.name;

    dataHandler(newDatas);
    closeModal(setShowEditModal)
  };

  const changeItemStatus = (id) => {
    const newDatas = [...datas];
    newDatas[id].isDone = !newDatas[id].isDone;

    dataHandler(newDatas);
  };

  const renderItems = () => {
    return datas.map((item, i) => {
      return (
        <Item
          key={i}
          text={item.name}
          editMethod={() => {
            setDataToBeHandled({
              id: item.id,
              name: item.name,
            });
            setShowEditModal(!showEditModal);
          }}
          deleteMethod={() => {
            setDataToBeHandled(item.id);
            setShowDeleteModal(!showDeleteModal);
          }}
          changeStatus={() => {
            changeItemStatus(i);
          }}
          done={item.isDone}
        />
      );
    });
  };

  const sendEmail = () => {
    const exampleAddress = "digite_o_email_a_enviar@example.com";
    const emailTitle = encodeURIComponent(`Minha lista de ${listName}`);
    const mailtoLink = `mailto:${exampleAddress}?subject=${emailTitle}`;
    window.location.href = mailtoLink;
  };

  const createItemModal = () => {
    const maxCharacters = 72;

    return (
      <FlexModal message={"Digite o nome de seu novo item:"} closeModal={() => closeModal(setShowCreateModal)}>
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
                createItem();
              }}
            />
          )}
          <Button
            icon={<IcoX />}
            text={"Cancelar"}
            action={() => closeModal(setShowCreateModal)}
          />
        </div>
      </FlexModal>
    );
  };

  const editItemModal = () => {
    const maxCharacters = 72;

    return (
      <FlexModal message={"Altere o nome do item:"} closeModal={() => closeModal(setShowEditModal)}>
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
              action={changeItemName}
            />
          )}
          <Button
            icon={<IcoX />}
            text={"Cancelar"}
            action={() => closeModal(setShowEditModal)}
          />
        </div>
      </FlexModal>
    );
  };

  const deleteItemModal = () => {
    return (
      <FlexModal message={"Tem certeza que deseja excluir este item?"} closeModal={() => closeModal(setShowDeleteModal)}>
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
              removeItem();
            }}
          />
          <Button
            icon={<IcoX />}
            text={"Cancelar"}
            action={() => closeModal(setShowDeleteModal)}
          />
        </div>
      </FlexModal>
    );
  };

  return (
    <main className="main-list">
      <NavBar />
      <section>
        <h3 className="list-page-title">Lista: {listName}</h3>
        <div className="buttons-content">
          <Button
            icon={<IcoPlus />}
            text={"Criar um item"}
            action={() => {
              setShowCreateModal(!showCreateModal);
            }}
          />
          <Button
            icon={<IcoEmail />}
            text={"Enviar esta lista por e-mail"}
            action={() => {
              sendEmail();
            }}
          />
        </div>
        <div className="item-area">
          {datas.length > 0 ? (
            renderItems()
          ) : (
            <>
              <div className="about-content">
                <h4>Esta lista encontra-se vazia!</h4>
                <p>
                  Caso queira criar um novo item, basta clicar acima em{" "}
                  <span>Criar um item</span>.
                </p>
              </div>
            </>
          )}
        </div>
      </section>
      {showCreateModal && createItemModal()}
      {showEditModal && editItemModal()}
      {showDeleteModal && deleteItemModal()}
    </main>
  );
}
