import { useState } from "react";

const Modal = ({ buttonText, buttonStyles, children, buttonModalId }) => {

    const [modalId] = useState(buttonModalId);

    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */ }
            <button className={ `${buttonStyles}` } onClick={ () => document.getElementById(modalId).showModal() }>
                { buttonText }
            </button >
            <dialog id={ modalId } className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */ }
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
                    </form>
                    { children }
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
}

export default Modal;