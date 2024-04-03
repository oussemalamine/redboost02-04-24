import React, { useState } from "react";
import "./FileNamePopUp.css";
function FileNamePopUp({ setShowFileNameInput, handleSubmitFileName }) {
  const [filenameInput, setFilenameInput] = useState("");
  const handleChange = (e) => {
    setFilenameInput(e.target.value);
  };
  const handleClose = () => {
    setShowFileNameInput(false);
  };
  const handleSubmit = () => {
    handleSubmitFileName(filenameInput);
  };
  return (
    <div className="filename-popup">
      <h3>Edit File Name</h3>
      <p>please enter your filename here. We will send Updates Occasionally</p>
      <input
        className="filename-input"
        type="text"
        placeholder="FileName *"
        onChange={handleChange}
      />
      <div className="pop-up-btns">
        <button className="close-pop-btn" onClick={handleClose}>
          Close
        </button>
        <button className="edit-pop-btn" onClick={handleSubmit}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default FileNamePopUp;
