import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { IoSettings } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import face from "../Images/face.jpg";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaMessage } from "react-icons/fa6";
import axiosInstance from "../axiosInstance";

function Header({ selectedItem, setIsLogged }) {
  const handleLogout = async () => {
    try {
      await axiosInstance.get("/logout").then((res) => {
        if (res.data) {
          setIsLogged(false);
          navigate("/login");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <header className="header-dash">
      <div className="header-title">
        <h3>{selectedItem}</h3>
      </div>
      <SearchBar />
      <ul className="header-list">
        <li className="header-list-item">
          <FaMessage style={{ color: "white" }} />
        </li>
        <li className="header-list-item">
          <IoIosNotifications style={{ color: "white" }} />
        </li>
        <li className="header-list-item">
          <RiLogoutBoxRFill style={{ color: "white" }} onClick={handleLogout} />
        </li>
      </ul>
    </header>
  );
}

export default Header;
