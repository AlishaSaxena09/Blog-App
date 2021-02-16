import React from "react";
import "../Form.css";
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
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.validateForm();
    console.log("form submitted");
  };
  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <h3>SIGN IN</h3>
          <ul className="form-error">
            {this.state.errors.map((error) => (
              <li>{error}</li>
            ))}
          </ul>
          <p>
            <Link to="/signup">Need an acount ?</Link>
          </p>
          <input placeholder="Email" type="email" name="email" />
          <input placeholder="Password" type="password" name="password" />
          <button type="Submit">Sign In</button>
        </form>
      </div>
    );
  }
}
export default SignIn;
