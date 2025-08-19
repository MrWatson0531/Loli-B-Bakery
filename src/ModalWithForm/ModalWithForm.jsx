
import "../ModalWithForm/ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  onClick,
  isOpen,
  onSubmit,
  id,
  modalContentMod,
  modalForm
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className={modalContentMod}>
        <div className="modal__head">
        <h2 className="modal__title">{title}</h2>
        <form className={modalForm} onSubmit={onSubmit} id={id}>
          {children}
          <button
            className="modal__close"
            type="button"
            onClick={ onClick }
          ></button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ModalWithForm;
