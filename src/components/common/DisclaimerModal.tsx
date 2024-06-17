import React, { useState } from "react";
import FontAwesomeIcon from "./FontAwesomeIcon";
import ConfirmModal from "./ConfirmModal";
import clsx from "clsx";

interface Props {
  title: string;
  description: string | React.ReactNode;
  animate?: boolean;
}

const DisclaimerModal = ({ description, title, animate = false }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex items-center">
        <FontAwesomeIcon
          className={clsx("fa-solid fa-circle-info", { "fa-bounce": animate })}
          onClick={handleOpenModal}
        />
      </div>

      <ConfirmModal
        hideCloseBtn
        isOpen={isOpen}
        onProceed={handleCloseModal}
        onClose={handleCloseModal}
        content={{
          title,
          description,
        }}
      />
    </>
  );
};

export default DisclaimerModal;
