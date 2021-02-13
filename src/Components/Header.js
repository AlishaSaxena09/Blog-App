import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <h1>conduit</h1>
        <nav className="nav">
          <ul className="ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Header;
