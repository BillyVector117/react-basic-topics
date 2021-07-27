import ReactDOM from 'react-dom';
import "./Modal.css"
const ModalPortal = ({ children, isOpen, closeModal }) => {
    // Avoid closing modal when click on Modal container
    const handleModalContainerClick = (event) => {
        event.stopPropagation()
    }
    return ReactDOM.createPortal(
        // Open modal only if 'isOpen' state is true
        <article className={`modal ${isOpen && "is-open"} `} onClick={closeModal} >
            <div className="modal-container" onClick={handleModalContainerClick} >
                <button className="modal-close" onClick={closeModal} >X</button>
                <h6>This modal is render through another HTML Node (Portals)</h6>
                {children}
            </div>
        </article>, document.getElementById('modalPortal')
    )
}

export default ModalPortal
