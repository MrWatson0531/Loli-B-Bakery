import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LogoutModal = ({
  handleCloseClick,
  handleLogOutClick,
  handleLogout,
  handleModalOverlayClick,
  isOpen,
  title,
  buttontext,
  isLoggedIn,
}) => {
    
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClick={handleLogout}
      buttontext={"Yes, Log out"}
      title={"Log out?"}
      className="logoutModal"
      modalContentMod={"modal__content"}
      onSubmit={handleLogOutClick}
    >
     {isLoggedIn && (<section handleModalOverlayClick={handleModalOverlayClick}>
        <div className={`modal ${isOpen && "modal_opened"}`}>
          <h2 className="modal__title">{title}</h2>
          <div className="logout__section">
            <button
              className="modal__btn"
              onClick={handleLogoutClick}
              type="submit"
            >
              {buttontext}
            </button>
            <button className="modal__btn" onClick={handleCloseClick}>
              {" "}
              "Cancel"{" "}
            </button>
          </div>
        </div>
      </section>)}
    </ModalWithForm>
  );
};

export default LogoutModal;
