import { findByLabelText } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <p>Conduit</p>
      <p>
        An interactive learning project from Thinkster. Code & design licensed
        under MIT.
      </p>
    </div>
  );
}
export default Footer;
