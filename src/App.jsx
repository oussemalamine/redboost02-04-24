import React, { useState, useEffect } from "react";
import Login from "./Components/loginPage/Login";
import "./App.css";
import Register from "./Components/Register/Register";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dash from "./Components/adminDash/Dash";
import Dashboard from "./Components/DashPages/Dashboard";
import Database from "./Components/DashPages/Database";
import Events from "./Components/DashPages/Events";
import HR from "./Components/DashPages/HRmanagment";
import Activity from "./Components/DashPages/LatestActivity";
import Marketing from "./Components/DashPages/Marketing";
import User from "./Components/DashPages/User";
import ProtectedRoute from "./ProtectedRoute";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import axiosInstance from "./Components/axiosInstance";
import axios from "axios";
function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  axios.defaults.withCredentials = "true";
  useEffect(() => {
    const checkAuth = async () => {
      await axiosInstance.get("/login").then((response) => {
        if (response.data.authenticated) {
          setIsLogged(true);
          setUsername(response.data.username);
        } else {
          setIsLogged(false);
          setUsername("");
        }
        setIsLoading(false); // Update loading state
        console.log("checkAuth : ", response.data);
      });
    };
    checkAuth();
  }, []);

  console.log(isLogged);

  // Render loading indicator while authentication check is in progress
  if (isLoading) {
    return null;
  }

  return (
    <div className="container">
      <Routes>
        <Route
          path="/login"
          element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/Dash"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <Dash setIsLogged={setIsLogged} isLogged={isLogged} />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard username={username} />} />
          <Route path="database" element={<Database />} />
          <Route path="events" element={<Events />} />
          <Route path="HR" element={<HR />} />
          <Route path="activities" element={<Activity />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="user" element={<User />} />
        </Route>

        <Route path="/*" element={<PageNotFound />} />
        {/* <Route path="/not_Connected" element={<PrivateRoute />} /> */}
      </Routes>
    </div>
  );
}

export default App;
