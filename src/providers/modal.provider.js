'use client'
import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [component, setComponent] = useState(null);
    const [props, setProps] = useState({});

    const openModal = (Component, props = {}) => {
        setComponent(() => Component);
        setProps(props);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setComponent(null);
        setProps({});
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            {isOpen && component && (
                <component.type {...component.props} {...props} onClose={closeModal} />
            )}
        </ModalContext.Provider>
    );
};
