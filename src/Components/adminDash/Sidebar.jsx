import React, { useEffect, useState } from "react";
import { FiHome } from "react-icons/fi";
import { FaDatabase, FaHandHoldingDollar } from "react-icons/fa6";
import { MdEventNote } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import logo from "../Images/logoGlow.png";
const Pages = [
  "Dashboard",
  "HR Management",
  "Database",
  "Events",
  "Marketing",
  "User",
  "Latest Activity",
];
function Sidebar({ handleItemClick }) {
  const [show, setShow] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [width, setWidth] = useState(1000);
  function setItemName(itemName) {
    handleItemClick(itemName);
  }
  function popUp() {
    setShow(!show);
  }
  function selectItem(itemName) {
    setActiveItem(itemName);
  }
  function handleClick(e) {
    // Vérifier si l'élément cliqué n'est pas dans la sidebar-list
    if (!e.target.closest(".sidebar-list")) {
      setActiveItem(null);
    }
  }
  function updateWidth() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, []);
  return (
    <div
      className={show || width < 1000 ? "sidebar-active" : "sidebar"}
      onClick={handleClick}
    >
      <div className="header-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="sidebar-list">
        <li
          className={`sidebar-item ${
            activeItem === "Dashboard" ? "active" : ""
          }`}
          onClick={() => {
            setItemName("Dashboard");
            selectItem("Dashboard");
          }}
        >
          <Link className="item-link" to={"/Dash/dashboard"}>
            <FiHome className="sidebar-item-icon" />
            <p>Dashboard</p>
          </Link>
        </li>
        <li
          className={`sidebar-item ${
            activeItem === "HR Management" ? "active" : ""
          }`}
          onClick={() => {
            setItemName("HR Management");
            selectItem("HR Management");
          }}
        >
          <Link className="item-link" to={"/Dash/HR"}>
            <FaUserTie className="sidebar-item-icon" />
            <p>HR Management</p>
          </Link>
        </li>
        <li
          className={`sidebar-item ${
            activeItem === "Database" ? "active" : ""
          }`}
          onClick={() => {
            setItemName("Database");
            selectItem("Database");
          }}
        >
          <Link className="item-link" to={"/Dash/database"}>
            <FaDatabase className="sidebar-item-icon" />
            <p>Database</p>
          </Link>
        </li>
        <li
          className={`sidebar-item ${activeItem === "Events" ? "active" : ""}`}
          onClick={() => {
            setItemName("Events");
            selectItem("Events");
          }}
        >
          <Link className="item-link" to={"/Dash/events"}>
            <MdEventNote className="sidebar-item-icon" />
            <p>Events</p>
          </Link>
        </li>
        <li
          className={`sidebar-item ${
            activeItem === "Marketing" ? "active" : ""
          }`}
          onClick={() => {
            setItemName("Marketing");
            selectItem("Marketing");
          }}
        >
          <Link className="item-link" to={"/Dash/marketing"}>
            <FaHandHoldingDollar className="sidebar-item-icon" />
            <p>Marketing</p>
          </Link>
        </li>
        <li
          className={`sidebar-item ${activeItem === "User" ? "active" : ""}`}
          onClick={() => {
            setItemName("User");
            selectItem("User");
          }}
        >
          <Link className="item-link" to={"/Dash/user"}>
            <FaUser className="sidebar-item-icon" />
            <p>User</p>
          </Link>
        </li>
        <li
          className={`sidebar-item ${
            activeItem === "Latest Activity" ? "active" : ""
          }`}
          onClick={() => {
            setItemName("Latest Activity");
            selectItem("Latest Activity");
          }}
        >
          <Link className="item-link" to={"/Dash/activities"}>
            <FiActivity className="sidebar-item-icon" />
            <p>Latest Activity</p>
          </Link>
        </li>
      </ul>
      <div className="sidebar-menu">
        <TfiMenuAlt onClick={popUp} className="sidebar-menu-icon" />
      </div>
    </div>
  );
}

export default Sidebar;
