import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import { Navbar } from "react-bootstrap";

const Navb = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="ms-auto">
      <li className="nav-item">
        <Link to="/profiles">Developers</Link>
      </li>

      <li className="nav-item">
        <Link to="/posts">Posts</Link>
      </li>
      <li className="nav-item">
        <Link to="/dashboard">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="/">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <Navbar.Collapse className="justify-content-end">
      <ul>
        <li className="nav-item">
          <Link to="/profiles">Developers</Link>
        </li>
        <li className="nav-item">
          <Link to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </Navbar.Collapse>
  );

  return (
    <Navbar className="sec" expand="lg">
      <Navbar.Brand>
        <h1 className="font-link">
          <Link to="/">Campus Connect</Link>
        </h1>
      </Navbar.Brand>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </Navbar>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navb);
