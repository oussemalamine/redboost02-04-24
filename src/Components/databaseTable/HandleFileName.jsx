import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
function HandleFileName({ setShowFileNameInput, onSubmit, showFileNameInput }) {
  const [filenameInput, setFilenameInput] = useState("");

  const handleChange = (e) => {
    setFilenameInput(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(filenameInput);
  };
  const handleClose = () => {
    setShowFileNameInput(false);
  };
  return (
    <Dialog
      open={showFileNameInput}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        sx: {
          width: "300px",
        },
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
      <DialogTitle sx={{ color: "#044c54" }}>Edit File Name</DialogTitle>
      <DialogContent>
        <DialogContentText>
          please enter your filename here. We will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="filename"
          name="filename"
          label="FileName"
          type="text"
          fullWidth
          variant="standard"
          value={filenameInput}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ color: "#044c54" }}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} sx={{ color: "#044c54" }}>
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default HandleFileName;
