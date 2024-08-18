import { useState } from "react";

const generateUniqueId = (buttonText) => {
    return `${buttonText.toLowerCase().replace(/ /g, "-")}-${Math.random().toString(36).substring(2, 15)}`;
}

const Modal = ({ buttonText, buttonStyles, children, isOpen = true }) => {

    const [modalId] = useState(generateUniqueId(buttonText));

    if (!isOpen) {
        document.getElementById(modalId).close();
    };

    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */ }
            <button className={ `btn ${buttonStyles}` } onClick={ () => document.getElementById(modalId).showModal() }>
                { buttonText }
            </button >
            <dialog id={ modalId } className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */ }
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
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