import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="formBody form-signin w-100 m-auto">
        <p className="lead">
          <i className="fas fa-user" /> Create Your Account
        </p>
        <Form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-floating">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              class="form-control top"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-floating">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              class="form-control middle"
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-floating">
            <input
              type="password"
              placeholder="Password"
              name="password"
              class="form-control middle"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-floating">
            <input
              type="password"
              placeholder="Confirm Password"
              class="form-control bottom"
              id="floatingInput"
              name="password2"
              value={password2}
              onChange={(e) => onChange(e)}
            />
          </div>
          <input type="submit" className="w-100 btn btn-lg btn-primary" value="Register" />
        </Form>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
