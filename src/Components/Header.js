import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="headers">
        <div className="header container">
          <nav className="navigation">
            <Link to="/">
              <h1 className="logo">Conduit</h1>
            </Link>
            <div className="nav">
              <Link to="/">
                Home
                <i class="fas fa-home"></i>
              </Link>
              <Link to="/tags">
                Tags
                <i class="fas fa-tags"></i>
              </Link>
            </div>
          </nav>
          <div className="right">
            <Link className="sign-btn" to="/signin">
              Sign In
            </Link>
            <Link className="signup-btn" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
