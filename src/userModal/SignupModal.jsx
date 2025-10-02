import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SignupModal = ({
  handleCloseClick,
  isOpen,
  onSubmit,
  handleLoginClick,
  handleSignup,
  handleModalOverlayClick
}) => {
  const [name, setName] = useState("");;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    // set all form fields to empty strings
    setName("");
    setEmail("");
    setPassword("");
  };

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, email, password }, resetForm);
  }
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClick={handleCloseClick}
      buttontext="Add garment"
      title="Sign up"
      className="addModal"
      modalContentMod={"modal__content"}
      onSubmit={handleSubmit}
      handleLoginClick={handleLoginClick}
      handleModalOverlayClick={handleModalOverlayClick}
    ><button
          className="modal__close"
          type="button"
          onClick={handleCloseClick}
        ></button>
      <label className="addModal__label" htmlFor="signup__email">
        Email *{""}
      </label>
      <input
        type="text"
        className="modal__input"
        placeholder="Email"
        id="signup__email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <div className="modal__input-border"></div>
      <label htmlFor="signup__password" className="addModal__label">
        Password *{""}
      </label>
      <input
        type="password"
        className="modal__input"
        placeholder="Password"
        id="signup__password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div className="modal__input-border"></div>
      <label htmlFor="signup__name" className="addModal__label">
        Name *{""}
      </label>
      <input
        type="text"
        className="modal__input"
        placeholder="Name"
        id="signup__name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div className="modal__input-border"></div>

      <div className="modal__btn-block">
        <button type="submit" className="modal__btn" onSubmit={handleSignup}>
          Sign up
        </button>
        <button
          type="button"
          className="addModal__btn"
          onClick={ handleLoginClick }
        >
           or Login 
        </button>
      </div>
    </ModalWithForm>
  );
};

export default SignupModal;
