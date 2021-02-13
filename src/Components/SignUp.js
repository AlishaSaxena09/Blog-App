import React from "react";
import { Link } from "react-router-dom";
import "../Form.css";
function SignUp() {
  return (
    <div className="form">
      <form>
        <h3>SIGN UP</h3>
        <p>
          <Link to="/signin">Have an acount ?</Link>
        </p>
        <input placeholder="Your Name" type="text" name="text" />
        <input placeholder="Email" type="email" name="email" />
        <input placeholder="Password" type="password" name="password" />
        <button type="Submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
