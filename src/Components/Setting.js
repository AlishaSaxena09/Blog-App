import React from "react";
import { Link } from "react-router-dom";

class Setting extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Your Settings</h1>
        <form>
          <input id="title" type="text" placeholder="URL of profile picture" />
          <input
            className="description-editor"
            type="text"
            placeholder="Name"
          />
          <textarea
            rows="10"
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
          <button className="publish">Update Settings</button>
        </form>
      </div>
    );
  }
}
