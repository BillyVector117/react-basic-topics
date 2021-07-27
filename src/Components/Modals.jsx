import React from 'react'
import { useModal } from '../hooks/useModal'
import Modal from './Modal'
import ModaPortal from './ModalPortal'

const Modals = () => {
    const [isOpen, openModal, closeModal] = useModal(false) // 'false' is optional
    const [isOpen2, openModal2, closeModal2] = useModal(false)
    const [isOpen3, openModal3, closeModal3] = useModal(false)

    return (
        <div>
            <h2>Modals</h2>

            <button onClick={openModal} >Modal 1</button>
            <Modal isOpen={isOpen} openModal={openModal} closeModal={closeModal} >
                <h3>Modal uno</h3>
                <p>Descripcion modal 1</p>
            </Modal>
            
            <button onClick={openModal2} >Modal 2</button>
            <Modal isOpen={isOpen2} openModal={openModal2} closeModal={closeModal2} >
                <h3>Modal dos</h3>
                <p>Descripcion modal 2</p>
                <img src="https://fakeimg.pl/250x100/" alt="fakeimg" />
            </Modal>

            <button onClick={openModal3} >Modal 3 (PORTALES)</button>
            <ModaPortal isOpen={isOpen3} openModal={openModal3} closeModal={closeModal3}>
                <h3>Modal tres</h3>
                <p>Descripcion modal 3</p>
                <img src="https://fakeimg.pl/250x100/" alt="fakeimg" />
            </ModaPortal>
        </div>
    )
}

export default Modals
