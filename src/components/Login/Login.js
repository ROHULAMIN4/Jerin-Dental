import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Firebase/useAuth";
import "./login.css";

const Login = () => {
  const { signInUsingGoole } = useAuth();
  return (
    <div className="App">
      <h2 className="text-primary">
        If you want yo visit my this site , <br /> and purchase any services
      </h2>
      <h2 className="text-warning mt-5"> First You Have to visit login</h2>
      <h4 className="text-danger mt-5">You have 2 alternative way to login </h4>
      <h3>Login</h3>
      <div onClick={signInUsingGoole} className="btn btn btn-warning mx-5 mt-5">
        Sign in Google
      </div>
      <Link to="email">
        <button className="btn btn btn-primary mt-5">Sign In Email</button>
      </Link>
    </div>
  );
};

export default Login;
