import React from "react";
import "../Form.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="form">
      <form>
        <h3>SIGN IN</h3>
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

export default SignIn;
