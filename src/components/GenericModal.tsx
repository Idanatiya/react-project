import * as React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useOnClickOutside } from "custom-hooks/useClickOutside";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  toggleModal: VoidFunction;
  isOpen: boolean;
  hasBackdrop?: boolean;
  withCloseBtn?: boolean;
  children: React.ReactNode;
}

const elPortal = document.getElementById("portal") as Element;

const GenericModal = ({
  toggleModal,
  isOpen = false,
  hasBackdrop = true,
  children,
  withCloseBtn,
}: Props) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef, () => {
    toggleModal();
  });
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      {hasBackdrop && <Backdrop />}
      <ModalRoot ref={modalRef}>
        {withCloseBtn && <CloseBtn icon={faTimes} onClick={toggleModal} />}
        {children}
      </ModalRoot>
    </>,
    elPortal
  );
};

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
`;

export const ModalRoot = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  min-width: 500px;
  min-height: 400px;
  padding: 20px;
  overflow: auto;
  border-radius: 8px;
`;

export const CloseBtn = styled(FontAwesomeIcon)`
  position: absolute;
  top: 5px;
  left: 5px;
  font-weight: bold;
  font-size: 20px;
`;

export default GenericModal;
