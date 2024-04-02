import React from "react";
import "./Dashboard.css";
function Dashboard({ username }) {
  return (
    <div className="dashboardCon">
      <h1>Welcome to Dashboard {username}</h1>
    </div>
  );
}

export default Dashboard;
