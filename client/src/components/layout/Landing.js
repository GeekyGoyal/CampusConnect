import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import pick from './../../img/pick.gif';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="landing-inner">
        <div class="row">
          <div class="col-lg-6">
            <h1 className="title-font">Connect with your peers.</h1>
            <div>
              <Button className="btns" variant="dark" size="lg">
                <Link to="/register">Sign Up</Link>
              </Button>{" "}
              <Button className="btns" variant="outline-light" size="lg">
                <Link to="/login">Log In</Link>
              </Button>{" "}
            </div>
          </div>
          <div class="col-lg-6 landing-div">
          <img src={pick} alt="Logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
