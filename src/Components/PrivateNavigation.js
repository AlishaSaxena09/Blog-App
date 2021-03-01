// done
import React from "react";
import { Link } from "react-router-dom";
import "../privatenavigation.css";
class PrivateNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    this.props.setUser(null);
    localStorage.removeItem("token");
  };
  render() {
    return (
      <div className="container">
        <div className="private-header">
          <Link to="/">
            <h1>
              <i class="fas fa-book-open"></i>conduit
            </h1>
          </Link>
          <nav className="nav-sec">
            <Link to="/editor">
              <i class="fas fa-feather-alt"></i>New Article
            </Link>
            <Link to="/settings">
              <i class="fas fa-users-cog"></i>
              Settings
            </Link>
            <Link to={`/profiles/${this.props.user.username}`}>
              <i class="fas fa-user-tie"></i>
              {this.props.user.username}
            </Link>
            <button className="logout" onClick={this.logout}>
              <i class="fas fa-sign-out-alt"></i>
              Log Out
            </button>
          </nav>
        </div>
        <div />
      </div>
    );
  }
}

export default PrivateNavigation;
