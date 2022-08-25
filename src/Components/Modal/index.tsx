import React, { useState } from "react";
import "./Modal.css";
import "boxicons";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type FormEvent = HTMLInputElement & { data: { value: string } };

export default function Modal({ setOpenModal }: ModalProps) {
  const [data, setData] = useState("");

  return (
    <div className="model" onClick={() => setOpenModal(false)}>
      <div className="contents" onClick={(e) => e.stopPropagation()}>
        <div className="close__icon" onClick={() => setOpenModal(false)}>
          {/* @ts-ignore */}
          <box-icon name="x"></box-icon>
        </div>
        <form
          className="qr-form"
          onSubmit={(e) => {
            e.preventDefault();
            setData((e.target as FormEvent).data.value);
          }}
        >
          <label>
            Enter your data
            <input
              type="text"
              name="data"
              className="qr-input"
              placeholder="example: your name"
            />
          </label>
          <button type="submit" className="qr-button">
            generate
          </button>
        </form>
        <div className="qr-image">
          {data && (
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${data}`}
              alt="QR"
            />
          )}
        </div>
      </div>
    </div>
  );
}
