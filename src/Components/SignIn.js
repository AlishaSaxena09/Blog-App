import React from "react";
import "../signin.css";
import { Link } from "react-router-dom";

function validateEmail(email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(email) == false) {
    return false;
  }

  return true;
}

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", errors: [] };
  }
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

    this.setState({ errors });
    return !errors.length;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      console.log("validform");
      fetch("https://mighty-oasis-08080.herokuapp.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
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
          <img src="./login.jpg" />
        </div>
        <div className="form-section">
          <form onSubmit={this.handleSubmit}>
            <h3>Already a User ?</h3>
            <p>
              <Link to="/signup">Need an account ?</Link>
            </p>
            <ul className="form-error">
              {this.state.errors.map((error) => (
                <li>{error}</li>
              ))}
            </ul>
            <div className="form-inputs">
              <input
                placeholder="Your e-mail"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleEmail}
              />
              <input
                placeholder="Your Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handlePassword}
              />
              <button className="signinbtn" type="Submit">
                Sign In
              </button>
            </div>
            <div className="svg">
              <img src="./light-signup.svg" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SignIn;
