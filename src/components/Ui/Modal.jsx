/* eslint-disable react/prop-types */

const Modal = ({ showModal, closeModal }) => {
  return (
    <dialog
      id="my_modal_4"
      className="modal"
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
