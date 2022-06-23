import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import Form from "react-bootstrap/Form";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="formBody form-signin w-100 m-auto">
        <p className="lead">
          <i className="fas fa-user" /> Login to your account
        </p>
        <Form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-floating">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              class="form-control top"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-floating">
            <input
              type="password"
              placeholder="Password"
              name="password"
              class="form-control bottom"
              id="floatingInput"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </div>
          <input
            type="submit"
            className="w-100 btn btn-lg btn-primary"
            value="Login"
          />
        </Form>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
