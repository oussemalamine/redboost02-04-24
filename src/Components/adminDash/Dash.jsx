// Dash.jsx
import React, { useEffect, useState } from "react";
import { Outlet, BrowserRouter as Router, useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import axiosInstance from "../axiosInstance";
import "./Dash.css";
function Dash({ setIsLogged }) {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const navigate = useNavigate();

  // Fonction pour mettre à jour l'élément sélectionné
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axiosInstance.post("/checkAuth");
        const authenticated = response.data.authenticated;
        if (!authenticated) {
          setIsLogged(false);
          navigate("/login");
        }
      } catch (error) {
        setIsLogged(false);
        console.error("Error checking authentication status:", error);
      }
    };
    checkAuthStatus();
    // const interval = setInterval(() => {
    //   checkAuthStatus();
    // }, 30000);
    // return () => clearInterval(interval);
  }, [navigate, setIsLogged]);
  return (
    <div className="dashContainer">
      <Header selectedItem={selectedItem} setIsLogged={setIsLogged} />
      <Sidebar handleItemClick={handleItemClick} />
      <Main />
    </div>
  );
}

export default Dash;
