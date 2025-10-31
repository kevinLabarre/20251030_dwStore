export const Modal = ({ modalContent }) => {
  return (
    <>
      {/* <button
        className={`btn ${buttonStyle}`}
        onClick={() => document.getElementById("my_modal").showModal()}
      >
        {buttonContent}
      </button> */}
      <dialog id="my_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {modalContent}
        </div>
      </dialog>
    </>
  );
};
