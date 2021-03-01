import React from "react";
import { Link } from "react-router-dom";
import "../signup.css";
function validateEmail(email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(email) == false) {
    return false;
  }

  return true;
}

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "", errors: [] };
  }
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  validateForm = () => {
    const errors = [];

    if (validateEmail(this.state.email) === false) {
      errors.push("Invalid Email Address");
    }
    if (this.state.password.length < 6) {
      errors.push("Password must contain atleast 6 characters");
    }
    if (
      this.state.password.search(/\d/) === -1 ||
      this.state.password.search(/[a-zA-Z]/) === -1
    ) {
      errors.push("Password must contain a letter and a number");
    }
    if (this.state.name.length < 6) {
      errors.push("Username should be at-least 6 characters long");
    }
    this.setState({ errors });
    return !errors.length;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // this.validateForm();
    if (this.validateForm()) {
      console.log("validform");
      fetch("https://mighty-oasis-08080.herokuapp.com/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: this.state.name,
            email: this.state.email,
            password: this.state.password,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.errors) {
            this.setState({
              errors: Object.keys(data.errors).map((field) => {
                return field + " " + data.errors[field];
              }),
            });
            return;
          }
          localStorage.setItem("token", data.user.token);
          this.props.setUser(data.user);
        });
    }
    console.log("form submitted");
  };
  render() {
    return (
      <div className="form">
        <div className="form-image">
          <img src="./signup.jpg" />
        </div>
        <div className="signup-section">
          <form onSubmit={this.handleSubmit}>
            <h3>SIGN UP</h3>
            <p>
              <Link to="/signin">Have an account ?</Link>
            </p>

            <div>
              <ul className="form-error">
                {this.state.errors.map((error) => (
                  <li>{error}</li>
                ))}
              </ul>
            </div>
            <div className="signup-inputs">
              <input
                onChange={this.handleName}
                value={this.state.name}
                placeholder="Your Name"
                type="text"
                name="text"
              />
              <input
                onChange={this.handleEmail}
                value={this.state.email}
                placeholder="Email"
                type="email"
                name="email"
              />
              <input
                onChange={this.handlePassword}
                value={this.state.password}
                placeholder="Password"
                type="password"
                name="password"
              />
              <button className="signupbtn" type="Submit">
                Sign Up
              </button>
            </div>
          </form>
          <div className="svg-img">
            <img src="./signup-01.svg" />
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
