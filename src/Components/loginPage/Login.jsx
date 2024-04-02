//********************* import
import React, { useEffect, useRef, useState } from "react";
import img from "../Images/logo.png";
import "./Login.css";
import signinValidation from "./signinValidation";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import ParticlesBackground from "../ParticlesBackground";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../../app/features/login/loginSlice";
import { useDebouncedCallback } from "use-debounce";
import axiosInstance from "../axiosInstance";
import axios from "axios";
import { GoAlertFill } from "react-icons/go";
const initial_Values = {
  email: "",
  password: "",
};
//************ Login Component
function Login({ isLogged, setIsLogged }) {
  // ********Hooks declaration
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.loginSlice);

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: initial_Values,
    validationSchema: signinValidation,
    onSubmit: async (values) => {
      console.log(values);
      axiosInstance
        .post("/login", values)
        .then((response) => {
          console.log("Authentication successful", response.data);
          setError("");
          setIsLogged(true);
          navigate("/Dash");
        })
        .catch((error) => {
          if (error.response) {
            setError(error.response.data.error);
          }
          console.log("Authentication failed", error);
        });
    },
  });
  //******* functions
  function handleVisiblity() {
    setPasswordVisible(!passwordVisible);
  }
  const handleStore = useDebouncedCallback((key, value) => {
    dispatch(handleLogin({ key, value }));
  }, 250);
  useEffect(() => {
    const timeout = setTimeout(console.log(state), 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [state]);
  useEffect(() => {
    if (isLogged === true) {
      navigate("/Dash");
    }
  }, []);
  return (
    <div className="formContainer1">
      <form onSubmit={handleSubmit} className="form" action="post">
        <img className="logo" src={img} alt="" />
        <h3>Sign in to continue</h3>
        {error ? (
          <div className="login-error">
            <GoAlertFill style={{ color: "red" }} />
            <p>{error}</p>
          </div>
        ) : null}

        <div className="inputGroup inputGroup1">
          <div className="icon icon1">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#000000" }} />
          </div>
          <input
            type="text"
            className="inputField inputEmail"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={(e) => {
              handleChange(e);
              handleStore("email", e.target.value);
            }}
          />
        </div>

        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <div className="inputGroup inputGroup2">
          <div className="icon icon2">
            <FontAwesomeIcon icon={faLock} style={{ color: "#000000" }} />
          </div>
          <div className="inputContainer">
            <input
              className="inputField inputPassword"
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={(e) => {
                handleChange(e);
                handleStore("password", e.target.value);
              }}
            />

            <div className="eyeIcon">
              <FontAwesomeIcon
                onClick={handleVisiblity}
                icon={passwordVisible ? faEyeSlash : faEye}
                style={{ color: "#000000" }}
              />
            </div>
          </div>
        </div>

        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <div className="infos">
          <label>
            <input className="checkbox" type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <input className="btn" type="submit" value="Get Started" />
        <p className="upLink">
          Not a member ?<Link to="/register">Sign Up</Link>
        </p>
      </form>
      <ParticlesBackground />
    </div>
  );
}

export default Login;
