import { useState, useEffect } from "react";
import "./EditUser.css";
import axiosInstance from "../axiosInstance";
function EditUser({ setOpen, user, setUser }) {
  const [editedUser, setEditedUser] = useState({});
  useEffect(() => {
    setEditedUser(user);
  }, [user]);
  console.log(editedUser);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevEditedUser) => ({
      ...prevEditedUser,
      [name]: value,
    }));
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.put(
        `/users/${user._id}`,
        editedUser
      );
      if (response.status === 200) {
        console.log("User updated successfully:", response.data);
      } else {
        console.error("Failed to update user:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating user:", error.message);
    }
    setUser(editedUser);
    setOpen(false);
  };
  return (
      <div className="linkedIn-popUp">
        <h3>Edit Informations</h3>
        <p>
          please enter your informations here. We will send Updates Occasionally
        </p>
        <input
          className="linkedIn-input"
          type="text"
          name="linkedIn"
          placeholder="linkedIn*"
          onChange={handleChange}
        />
        <div className="pop-up-buttons">
          <button className="close-pop-button" onClick={handleClose}>
            Close
          </button>
          <button className="edit-pop-button" onClick={handleSubmit}>
            Edit
          </button>
        </div>
      </div>
  );
}

export default EditUser;
