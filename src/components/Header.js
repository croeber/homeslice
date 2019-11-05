import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ loggedIn }) => (
  <div>
    <nav id="main-navbar" className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="" width="30" height="30" alt="" />
        Chris Roeber
      </a>

      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
      <Link to="/contact" className="link">
        Contact
      </Link>
    </nav>
  </div>
);

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(Header);
