import React from "react";

const CustomModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Are you sure?</h2>
        <p>Are you sure you want to delete this event?</p>
        <div className="button-group">
          <button className="btn btn-delete" onClick={onConfirm}>
            <i className="fas fa-trash"></i> Delete
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            <i className="fas fa-times"></i> Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
