import React from 'react';
import { createPortal } from "react-dom"
import { ModalAddTask } from '../ModalAddTask';

function Modal() {
    return createPortal(
        <div className="Modal ">
            <ModalAddTask />
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }