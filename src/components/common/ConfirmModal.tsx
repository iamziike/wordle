import React from "react";
import Modal from "./Modal";
import Button from "./Button";

interface Props {
  isOpen: boolean;
  onClose?: VoidFunction;
  onProceed: VoidFunction;
  hideCloseBtn?: boolean;
  content: {
    title: string;
    description: string | React.ReactNode;
  };
}

const ConfirmModal = ({
  isOpen,
  onClose,
  onProceed,
  content,
  hideCloseBtn = false,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <div>
          <i className="fa-solid fa-power-off text-7xl text-yellow-600"></i>
        </div>
        <h3 className="text-3xl font-semibold mb-3 mt-2">{content?.title}</h3>
        <p>{content?.description}</p>
        {!hideCloseBtn && (
          <Button className="mt-4" onClick={onProceed}>
            Continue
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default ConfirmModal;
