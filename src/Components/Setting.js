// Button Left
import React from "react";
import "../setting.css";
import { Link } from "react-router-dom";

class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="setting container">
        <form>
          <div className="setting-img">
            <img src="./settings.jpg" />
          </div>
          <div className="setting-text">
            <input
              id="title"
              type="text"
              placeholder="URL of profile picture"
            />
            <input
              className="description-editor"
              type="text"
              placeholder="Name"
            />
            <textarea
              rows="3"
              className="textarea-editor"
              type="text"
              placeholder="Short bio about you"
            ></textarea>
            <input
              className="description"
              type="email"
              placeholder="your email"
            />
            <input type="password" placeholder="password" />
            <button className="update-settings">
              <i class="fas fa-cog"></i>Update Settings
            </button>
          </div>
        </form>
        <div className="settings">
          <h1 className="setting-heading">
            Your Settings <i class="fas fa-users-cog"></i>
          </h1>
          <img src="./settttings.svg" />
        </div>
      </div>
    );
  }
}
export default Setting;
