import React from "react";
import "./signup/signup.css";
import { Redirect } from "react-router-dom";

import axios from "axios";
var userData = {};
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      loggedin: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    userData = {
      username: this.state.email,
      password: this.state.password,
    };
    console.log(userData);
    axios
      .post("/auth/login", userData, { withCredentials: true })
      .then((res) => {
        console.log(res);
        // Save to localStorage
        // Set token to localStorage

        this.setState({ loggedin: true });
        //console.log(localStorage.getItem('jwtToken'))

        // Set token to Auth header

        // Decode token to get user data

        // Set current user
      })
      .catch((err) => {
        console.log(err.respose);
        this.setState({ error: err.response.data });
      });
  };

  render() {
    console.log(this.state.error);
    if (this.state.loggedin) {
      return <Redirect to="/" />;
    }

    return (
      <div className="loginRegister">
        <div
          className={`mobileSmall-logo ${this.state.nextStep ? "hide" : ""}`}
        >
          <img
            src={require("./annadanlogo.png")}
            width="26"
            height="35"
            alt="logo"
          ></img>
        </div>

        <div className="new-CloseButton">
          <em
            className="icon-cancel"
            onClick={(event) => (window.location.href = "/")}
          >
            <i class="fas fa-times"></i>
          </em>
        </div>
        <div className="loginRegisterLeft">
          <div className="loginRegisterLeft-bg2 active"></div>
          <span className="topSmall-logo">
            <img
              src={require("./annadanlogo.png")}
              width="26"
              height="35"
              alt="logo"
            ></img>
          </span>
        </div>
        <div className="loginRegisterRight">
          <div className="loginBox active">
            <div className="loginRegisterForm">
              <div className="authHeading">
                <span
                  className="authHeading-main"
                  style={{ fontWeight: "bolder" }}
                >
                  A small step towards
                </span>
                <span className="authHeading-sub">doing something good!</span>
              </div>

              <form name="registerForm">
                <ul className="signupSteps activeStep">
                  <li>
                    <span className="field-labels">Sign In </span>
                    {this.state.error ? (
                      <div className="error">{this.state.error}</div>
                    ) : (
                      ""
                    )}
                    <div className="input-container">
                      <input
                        type="text"
                        placeholder="Email Address"
                        maxLength="100"
                        email=""
                        autoComplete="off"
                        name="email"
                        id="email"
                        onChange={(e) => this.handleChange(e)}
                      ></input>
                    </div>
                  </li>
                  <li>
                    <div className="relativeRow">
                      <input
                        placeholder="Password"
                        name="password"
                        maxLength="100"
                        minLength="8"
                        type="password"
                        onChange={(e) => this.handleChange(e)}
                        id="password"
                      ></input>
                    </div>
                  </li>
                  <li>
                    <button
                      type="submit"
                      className="submitButton"
                      onClick={this.onSubmit}
                    >
                      <span className="icon-right"></span>Login
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
