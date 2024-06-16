import React, { useCallback, useEffect } from "react";
import useSettings from "@/utils/useSettings";
import { KeyValue } from "@/models/types";
import { keyboard } from "@/constants";
import { isAlphabet } from "@/utils";

interface Props {
  disabled?: boolean;
  onSubmit: VoidFunction;
  onBackspace: VoidFunction;
  onChange: (value: string) => void;
}

interface KeyProps {
  value: string;
  onClick: (value: string) => void;
  label?: string | React.ReactElement;
  className?: string;
}

const Key = ({ value, className, onClick, label }: KeyProps) => {
  return (
    <button
      type="button"
      onPointerDown={() => onClick(value)}
      className={
        className +
        " bg-gray-800 text-white py-2 m-1 rounded text-xl border border-gray-800 hover:bg-transparent hover:text-gray-800 transition-all duration-300 ease-in-out select-none"
      }
    >
      {label ?? value}
    </button>
  );
};

const VisualKeyboard = ({
  onChange,
  onSubmit,
  onBackspace,
  disabled,
}: Props) => {
  const { settings } = useSettings();

  const handleKeyClick = useCallback(
    (value: string) => {
      value = value?.toUpperCase();

      if (disabled) {
        return;
      }

      if (value === "BACKSPACE") {
        onBackspace();
        return;
      }

      if (value === "ENTER") {
        onSubmit();
        return;
      }

      onChange(value?.toLowerCase());
    },
    [disabled, onChange, onBackspace, onSubmit]
  );

  const handleEvent = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key.toUpperCase() as KeyValue;

      if (
        settings?.isModalOpen ||
        event?.altKey ||
        event?.ctrlKey ||
        Number.isInteger(parseInt(key))
      ) {
        return;
      }

      if (
        key === "BACKSPACE" ||
        key === "ENTER" ||
        (key.length === 1 && isAlphabet(key))
      ) {
        handleKeyClick(key);
      }
    },
    [handleKeyClick, settings?.isModalOpen]
  );

  useEffect(() => {
    window.onkeydown = handleEvent;
  }, [handleEvent]);

  return (
    <div className="flex flex-col text-center mx-auto py-3 lg:w-2/5 lg:mx-auto">
      <div className="flex">
        {keyboard?.firstRow.map((key, index) => (
          <Key
            key={index}
            value={key}
            className="flex-1"
            onClick={handleKeyClick}
          />
        ))}
      </div>

      <div className="flex">
        {keyboard?.secondRow.map((key, index) => (
          <Key
            key={index}
            value={key}
            className="flex-1"
            onClick={handleKeyClick}
          />
        ))}
      </div>

      <div className="flex">
        {keyboard?.lastRow.map((key, index) => {
          if (key === "BACKSPACE") {
            return (
              <Key
                key={index}
                value={key}
                className="flex-1 px-4"
                onClick={handleKeyClick}
                label={<i className="fa-solid fa-delete-left"></i>}
              />
            );
          }

          if (key === "ENTER") {
            return (
              <Key
                key={index}
                value={key}
                label={<i className="fa-solid fa-right-to-bracket"></i>}
                className="flex-1 px-4"
                onClick={handleKeyClick}
              />
            );
          }

          return (
            <Key
              key={index}
              value={key}
              className="flex-1"
              onClick={handleKeyClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default VisualKeyboard;
