import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./Email.css";

const EmailAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  const auth = getAuth();
  const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassord(e.target.value);
  };
  const Handleragistartion = (e) => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
      return user.displayName;
    });
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={Handleragistartion}>
        <h3 className="text-primary text-center">Please Register</h3>
        <div className="row mb-3 mx-4">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onBlur={hanldeEmail}
              type="email"
              className="form-control"
              id="inputEmail3"
              required
            />
          </div>
        </div>
        <div className="row mb-3 mx-4">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handlePassword}
              type="password"
              className="form-control"
              id="inputPassword3"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-style-register">
          Register
        </button>
      </form>
    </div>
  );
};

export default EmailAuth;
