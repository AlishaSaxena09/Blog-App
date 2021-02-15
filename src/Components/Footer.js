import { findByLabelText } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import "../Footer.css";
function Footer() {
  return (
    <footer id="footer">
      <span>conduit</span>
      <p>
        An interactive learning project from{" "}
        <a href="thinkster.io" target="_blank">
          Thinkster
        </a>
        . Code & design licensed under MIT.
      </p>
    </footer>
  );
}
export default Footer;
