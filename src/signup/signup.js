import React from "react";
import "./signup.css";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

var userData = {};
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      contactNumber: "",
      redirect: false,
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
      name: this.state.name,

      contactNumber: this.state.contactNumber,
    };
    console.log(userData);
    axios
      .post("/auth/signup", userData)

      .then((res) => {
        console.log(res.config.data);
        if (res.data) {
          console.log("successful signup");
          this.setState({ redirect: true });
        } else console.log("signup error");
      })
      .catch((err) => console.log(err.response.data));
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="loginRegister">
        <div
          className={`mobileSmall-logo ${this.state.nextStep ? "hide" : ""}`}
        >
          <img
            src={require("../annadanlogo.png")}
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
              src={require("../annadanlogo.png")}
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
                    <span className="field-labels">Sign up </span>

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
                    <input
                      name="name"
                      type="text"
                      pattern="[a-zA-Z ]*"
                      maxLength="100"
                      placeholder="Enter Name (ex. John Smith)"
                      id="name"
                      onChange={(e) => this.handleChange(e)}
                    ></input>
                  </li>
                  <li>
                    <input
                      className="form-control"
                      placeholder="Mobile Number"
                      type="text"
                      maxLength="20"
                      id="contactNumber"
                      onChange={(e) => this.handleChange(e)}
                    ></input>
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
                      <span className="icon-right"></span> Register{" "}
                    </button>
                  </li>
                  <li>
                    <p className="orAction noMargin">
                      Already have an account?{" "}
                      <button type="button">
                        <Link to="/signin" style={{ color: "#0071e4" }}>
                          Sign in
                        </Link>
                      </button>
                    </p>
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
export default SignUp;
