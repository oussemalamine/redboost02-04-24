import React from "react";
import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";
import cloud from "../Images/cloud.png";
function PageNotFound() {
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate("/login");
  };

  return (
    <div className="not-found-container">
      <img className="cloud1" src={cloud} alt="" />
      <img className="cloud2" src={cloud} alt="" />
      <img className="cloud3" src={cloud} alt="" />
      <img className="cloud4" src={cloud} alt="" />
      <div className="not-found-container-info">
        <p className="codeError">Oops!</p>
        <h1>401- Authentication required</h1>
        <p>WE'RE SORRY, YOUR REQUEST IS UNAUTHORIZED</p>
        <button onClick={handleRefresh} className="redirectBtn">
          Refresh
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
