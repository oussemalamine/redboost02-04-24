import React, { useEffect, useState } from "react";
import "./User.css";
import { FaLinkedin } from "react-icons/fa6";
import img from "../Images/user.png";
import axiosInstance from "../axiosInstance";
import { MdEdit } from "react-icons/md";
import EditUser from "./EditUser";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { GiRank3 } from "react-icons/gi";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaIdCard } from "react-icons/fa";
import { FcTreeStructure } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
function User({ username, data }) {
  const [user, setUser] = useState();
  const [image, setImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editMode2, setEditMode2] = useState(false);
  const [updateLog, setUpdateLog] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [open, setOpen] = useState(false);
  console.log("image :", image);
  console.log("editedData: ", editedData);
  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const formattedDate = dateTime.toLocaleDateString();
    const formattedTime = dateTime.toLocaleTimeString();
    return `${formattedDate} ${formattedTime}`;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    setEditedData((prevEditedData) => ({
      ...prevEditedData,
      [name]: value,
    }));
  };
  const calculateCompletionPercentage = () => {
    const fieldsToCheck = [
      "role",
      "department",
      "cin",
      "matricule",
      "phone",
      "adress",
      "birthday",
      "exp",
      "password",
    ];
    const completedFields = fieldsToCheck.filter((field) => {
      const value = user[field];
      return value !== undefined && value !== "" && value !== "Undefined";
    });
    const completionPercentage =
      (completedFields.length / fieldsToCheck.length) * 100;
    return completionPercentage.toFixed(2);
  };
  useEffect(() => {
    if (Object.keys(editedData).length > 0) {
      // Check if editedData is not empty
      setUpdateLog((prevUpdateLog) => [
        ...prevUpdateLog,
        `User update ${
          Object.keys(editedData)[0]
        } at ${new Date().toLocaleString()}`,
      ]);
    }
  }, [editedData]);

  const handleEdit = () => {
    setEditMode(true);
  };
  const handleEditMode = () => {
    setEditMode2(true);
  };
  const handleConfirm = async () => {
    try {
      const response = await axiosInstance.put(`/users/${user._id}`, user);
      if (response.status === 200) {
        console.log("User updated successfully:", response.data);
      } else {
        console.error("Failed to update user:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating user:", error.message);
    }
    setEditMode(false);
  };
  const handleConfirm2 = async () => {
    try {
      const response = await axiosInstance.put(`/users/${user._id}`, user);
      if (response.status === 200) {
        console.log("User updated successfully:", response.data);
      } else {
        console.error("Failed to update user:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating user:", error.message);
    }
    setEditMode2(false);
  };
  const handleConfirmPhoto = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image); // Assuming image is a File object obtained from input[type=file]

      const response = await axiosInstance.put(`/users/${user._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        console.log("User photo updated successfully:", response.data);
        setUser((prevUser) => ({
          ...prevUser,
          image: response.data.image,
        }));
      } else {
        console.error("Failed to update user photo:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating user photo:", error.message);
    }
    setImage(null);
  };

  const handleChangePhoto = (e) => {
    setImage(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;
      // Update the image state directly
      setImage(imageDataUrl);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get(`/users?username=${username}`);
        if (response.status === 200) {
          setUser(response.data);
        } else {
          console.error("Failed to fetch user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };
    fetchUserData();
  }, [username]);
  console.log("user:", user);
  if (!user) {
    return null; // Or you can render a loading indicator
  }
  const completionPercentage = calculateCompletionPercentage();
  return (
    <div className="user-container">
      {open ? (
        <EditUser setOpen={setOpen} user={user} setUser={setUser} />
      ) : null}
      <div className="user-information1">
        <img src={user.image ? user.image : img} alt="" />
        <h3>{user.username}</h3>
        <p className="email">{user.email}</p>
        <div className="linkedin-wrapper">
          <label htmlFor="LinkedIn">
            <FaLinkedin />
          </label>
          <p className="linkedIn">
            {user.linkedIn ? user.linkedIn : "Undefined"}
          </p>
        </div>
        {image ? (
          <div className="btns">
            <button className="confirm-btn" onClick={handleConfirmPhoto}>
              confirm
            </button>
          </div>
        ) : (
          <div className="btns">
            <label className="upload-image-btn">
              <input
                type="file"
                accept="image/*"
                className="upload-image-input"
                onChange={handleChangePhoto}
              />
              Upload Image
            </label>
            <button className="edit-personal-btn">
              <MdEdit
                style={{ color: "#0077cc" }}
                onClick={() => setOpen(true)}
              />
            </button>
          </div>
        )}

        <div className="completion-percentage">
          <div
            className="indicator"
            style={{
              background: `linear-gradient(to right, #0077cc ${completionPercentage}%, transparent ${completionPercentage}%)`,
            }}
          ></div>
          {completionPercentage}% Completed
        </div>
        {editMode ? (
          <>
            {" "}
            <div className="info-item1 info-item">
              {" "}
              <label htmlFor="role">Role:</label>
              <input
                type="text"
                className="role"
                name="role"
                defaultValue={user.role}
                onChange={handleChange}
              />
            </div>
            <div className="info-item2  info-item">
              {" "}
              <label htmlFor="department">Department:</label>
              <input
                type="text"
                className="department"
                name="department"
                defaultValue={user.department}
                onChange={handleChange}
              />
            </div>
            <div className="info-item3  info-item">
              {" "}
              <label htmlFor="cin">N°CIN:</label>
              <input
                type="text"
                className="cin"
                name="cin"
                defaultValue={user.cin}
                onChange={handleChange}
              />
            </div>
            <div className="info-item4  info-item">
              {" "}
              <label htmlFor="matricule">Matricule Fiscale:</label>
              <input
                type="text"
                className="matricule"
                name="matricule"
                defaultValue={user.matricule}
                onChange={handleChange}
              />
            </div>
            <div className="button">
              <button className="confirm-btn" onClick={handleConfirm}>
                Confirm
              </button>
              <button className="edit-btn" onClick={() => setEditMode(false)}>
                Cancel
              </button>
            </div>{" "}
          </>
        ) : (
          <>
            {" "}
            <div className="info-item1 info-item">
              {" "}
              <label htmlFor="role">
                <FcBusinessman /> Role:
              </label>
              <p className="role">{user.role}</p>
            </div>
            <div className="info-item2  info-item">
              {" "}
              <label htmlFor="department">
                <FcTreeStructure /> Department:
              </label>
              <p className="department">{user.department}</p>
            </div>
            <div className="info-item3  info-item">
              {" "}
              <label htmlFor="cin">
                <FaIdCard /> N°CIN:
              </label>
              <p className="cin">{user.cin ? user.cin : "undefined"}</p>
            </div>
            <div className="info-item4  info-item">
              {" "}
              <label htmlFor="matricule">
                <FcMoneyTransfer /> Matricule Fiscale:
              </label>
              <p className="matricule">
                {user.matricule ? user.matricule : "undefined"}
              </p>
            </div>
            <div className="button">
              <button className="edit-btn" onClick={handleEdit}>
                Edit
              </button>
              {/* <button className="confirm-btn">Confirm</button> */}
            </div>
          </>
        )}
      </div>
      <div className="user-information2">
        <div className="inf1">
          {editMode2 ? (
            <>
              {" "}
              <div className="info-item1  info-item">
                <label htmlFor="phone ">Phone:</label>
                <input
                  type="text"
                  className="phone"
                  name="phone"
                  defaultValue={user.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="info-item2  info-item">
                {" "}
                <label htmlFor="adress">Adress:</label>
                <input
                  type="text"
                  className="adress"
                  name="adress"
                  defaultValue={user.adress}
                />
              </div>
              <div className="info-item3  info-item">
                {" "}
                <label htmlFor="birthday">Birthday:</label>
                <input
                  type="text"
                  className="birthday"
                  name="birthday"
                  defaultValue={user.birthday}
                  onChange={handleChange}
                />
              </div>
              <div className="info-item4  info-item">
                {" "}
                <label htmlFor="exp">Exp point:</label>
                <input
                  type="text"
                  className="exp"
                  name="exp"
                  defaultValue={user.exp}
                  onChange={handleChange}
                />
              </div>
              <div className="info-item5  info-item">
                {" "}
                <label htmlFor="password">Password:</label>
                <input
                  type="text"
                  className="password"
                  name="password"
                  defaultValue={user.password}
                />
              </div>
              <div className="button">
                <button className="confirm-btn" onClick={handleConfirm2}>
                  Confirm
                </button>
                <button
                  className="edit-btn"
                  onClick={() => setEditMode2(false)}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="info-item1  info-item">
                {" "}
                <label htmlFor="phone ">
                  <FaPhoneAlt /> Phone:
                </label>
                <p className="phone">{user.phone}</p>
              </div>
              <div className="info-item2  info-item">
                {" "}
                <label htmlFor="adress">
                  <IoLocation />
                  Adress:
                </label>
                <p className="adress">{user.adress}</p>
              </div>
              <div className="info-item3  info-item">
                {" "}
                <label htmlFor="birthday">
                  <FaBirthdayCake />
                  Birthday:
                </label>
                <p className="birthday">{user.birthday}</p>
              </div>
              <div className="info-item4  info-item">
                {" "}
                <label htmlFor="exp">
                  <GiRank3 />
                  Exp point:
                </label>
                <p className="exp">{user.exp}</p>
              </div>
              <div className="info-item5  info-item">
                {" "}
                <label htmlFor="password">
                  <RiLockPasswordFill /> Password:
                </label>
                <p className="password">{user.password}</p>
              </div>
              <div className="button">
                <button className="edit-btn" onClick={handleEditMode}>
                  Edit
                </button>
              </div>
            </>
          )}
        </div>
        <div className="inf2">
          <h3>History</h3>
          <div className="history-container">
            <div className="session-information">
              <h2>Session Information</h2>
              <div>
                <h3>Logged In: </h3>
                {formatDateTime(data.loginTime)}
              </div>
              <div>
                <h3>Session Expiry Time: </h3>
                {formatDateTime(data.expiryTime)}
              </div>
            </div>
            <div className="changes">
              {updateLog.map((element, index) => (
                <div key={index}>{element}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
