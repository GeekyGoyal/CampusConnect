import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <div className="formBody form-create w-100 m-auto">
        <p class="lead">
          <i class="fas fa-code-branch" /> Add Experience
        </p>
        <form
          class="form"
          onSubmit={(e) => {
            e.preventDefault();
            addExperience(formData, history);
          }}
        >
          <div class="form-floating">
            <input
              type="text"
              placeholder="* Job Title"
              name="title"
              class="form-control top"
              value={title}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div class="form-floating">
            <input
              type="text"
              placeholder="* Company"
              name="company"
              class="form-control middle"
              value={company}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div class="form-floating">
            <input
              type="text"
              placeholder="Location"
              class="form-control middle"
              name="location"
              value={location}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div class="form-floating">
            <div class=" form-control middle">
              <div class="row">
                <div class="col">
                  <input
                    type="date"
                    name="from"
                    value={from}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div class="col">
                  <input
                    type="date"
                    name="to"
                    value={to}
                    onChange={(e) => onChange(e)}
                    disabled={toDateDisabled ? "disabled" : ""}
                  />
                </div>

                <div class="col">
                  <p>
                    <input
                      type="checkbox"
                      name="current"
                      checked={current}
                      value={current}
                      onChange={(e) => {
                        setFormData({ ...formData, current: !current });
                        toggleDisabled(!toDateDisabled);
                      }}
                    />{" "}
                    Current
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="form-floating">
            <textarea
              name="description"
              placeholder="Job Description"
              class="form-control bottom"
              value={description}
              onChange={(e) => onChange(e)}
            />
          </div>
          <input
            type="submit"
            className="w-100 btn btn-lg btn-primary form-control top"
          />
          <Link
            className="w-100 btn btn-lg btn-outline-dark form-control bottom"
            to="/dashboard"
          >
            Go Back
          </Link>
        </form>
      </div>
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(AddExperience));
