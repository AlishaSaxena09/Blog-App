import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";
class PrivateNavigation extends React.Component {
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
              <Link to="/editor">New Article</Link>
            </li>
            <li>
              <Link to="/profiles/:username">My Profile</Link>
            </li>
            <li>
              <Link to="/">Log Out</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default PrivateNavigation;
