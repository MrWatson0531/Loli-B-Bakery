import { useState, useContext, useEffect } from "react";
import { UserContext } from "../utils/contexts/UserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditModal = ({ handleCloseClick, isOpen, onSubmit }) => {
  const [name, setName] = useState("");
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const prefillForm = () => {
    // set all form fields to empty strings
    setName(currentUser.name);
  };
  useEffect(() => {
    prefillForm();
  }, [isOpen]);

  function handleSubmit(e) {
    console.log(name);
    e.preventDefault();
    onSubmit({ name, avatar });
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClick={handleCloseClick}
      buttontext="Save changes"
      title="Change profile data"
      className="addModal"
      modalContentMod={"addModal__content"}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="name">
        name *{""}
      </label>
      <input
        type="name"
        className="modal__input"
        placeholder="Name"
        id="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <div className="addModal__input-border"></div>
      
      <div className="addModal__btn-block">
        <button type="submit" className="addModal__btn">
          Save changes
        </button>
      </div>
    </ModalWithForm>
  );
};

export default EditModal;
