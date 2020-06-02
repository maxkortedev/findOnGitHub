import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar({ title }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a href="./" className="navbar-brand">
        {title}
      </a>
      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/">
          Home
        </Link>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "title",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
