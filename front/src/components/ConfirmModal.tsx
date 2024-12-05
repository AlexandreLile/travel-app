import React, { useState } from "react";
import Button from "./ui/Button";

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded">
        <p>Êtes-vous sûr de vouloir supprimer ?</p>
        <div className="flex gap-2 mt-4">
          <Button text="Annuler" onClick={onClose}></Button>
          <Button
            text="Supprimer"
            variant="danger"
            onClick={onConfirm}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
