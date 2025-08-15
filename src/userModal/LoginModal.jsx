import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  handleCloseClick,
  isOpen,
  onSubmit,
  handleSignupClick,
  handleLogin
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const resetForm = () => {
    // set all form fields to empty strings
    setEmail("");
    setPassword("");
  };

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ email, password }, resetForm);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClick={handleCloseClick}
      buttontext="Log in"
      title="User Login"
      className="addModal"
      modalContentMod={"modal__content"}
      onSubmit={handleSubmit}
    >
      <div className="modal__input-block">
        <label className="modal__label" htmlFor="email">
          Email *{""}
        </label>
        <input
          type="email"
          className="modal__input"
          placeholder="Email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </div>
      <div className="modal__input-border"></div>
      <div className="modal__input-block">
        <label htmlFor="password" className="modal__label">
          Password *{""}
        </label>
        <input
          type="password"
          className="modal__input"
          placeholder="Password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
      </div>
      <div className="modal__input-border"></div>
      <div className="modal__btn-block">
        <button type="submit" className="modal__btn" onSubmit={handleLogin}>
          Log in
        </button>
        <button
          type="button"
          className="addModal__btn"
          onClick={handleSignupClick}
        >
          or Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
