import "./Modal.css"

const Modal = ({ children, isOpen, closeModal }) => {
    // Avoid closing modal when click on Modal container
    const handleModalContainerClick = (event) => {
        event.stopPropagation()
    }
    return (
        // Open modal only if 'isOpen' state is true
        <article className={`modal ${isOpen && "is-open"} `} onClick={closeModal} >
            <div className="modal-container" onClick={handleModalContainerClick} >
                <button className="modal-close" onClick={closeModal} >X</button>
                {children}
            </div>
        </article>
    )
}

export default Modal
