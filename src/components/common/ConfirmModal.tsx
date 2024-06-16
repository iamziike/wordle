import React from "react";
import Modal from "./Modal";
import Button from "./Button";

interface Props {
  content: {
    title: string;
    description: string | React.ReactNode;
  };
  isOpen: boolean;
  onClose?: VoidFunction;
  onProceed: VoidFunction;
}

const ConfirmModal = ({ isOpen, onClose, onProceed, content }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <div>
          <i className="fa-solid fa-power-off text-7xl text-yellow-600"></i>
        </div>
        <h3 className="text-3xl font-semibold mb-3 mt-2">{content?.title}</h3>
        <p>{content?.description}</p>
        <Button className="mt-4" onClick={onProceed}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
