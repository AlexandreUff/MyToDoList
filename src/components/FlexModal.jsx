import { useEffect } from "react";
import { IcoExclamation } from "./Icons";

export default function FlexModal(props) {
  useEffect(() => {
    const modalGround = document.querySelector(".ground-modal");
    setTimeout(() => {
      modalGround.classList.toggle("effect");
    }, 50);
  }, []);

  return (
    <div className="ground-modal" onClick={props.closeModal}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="ico-content">
          <IcoExclamation />
        </div>
        <h3>{props.message}</h3>
        <div className="children-content">{props.children}</div>
      </div>
    </div>
  );
}
