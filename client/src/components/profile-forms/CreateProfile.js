import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <div className="formBody form-create w-100 m-auto">
        <p className="lead">
          <i className="fas fa-user" /> Create Your Profile
        </p>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-floating form-control top">
            <select name="status" className="addNet" value={status} onChange={(e) => onChange(e)}>
              <option value="0">* Select Professional Status</option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student">Student</option>
              <option value="Instructor">Teacher</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-floating">
            <input
              type="text"
              placeholder="Company"
              class="form-control middle"
              name="company"
              value={company}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-floating">
            <input
              type="text"
              placeholder="Website"
              class="form-control middle"
              name="website"
              value={website}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-floating">
            <input
              type="text"
              placeholder="Location"
              class="form-control middle"
              name="location"
              value={location}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-floating">
            <input
              type="text"
              placeholder="*Skills"
              class="form-control middle"
              name="skills"
              value={skills}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-floating">
            <input
              type="text"
              placeholder="Github Username"
              class="form-control middle"
              name="githubusername"
              value={githubusername}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-floating">
            <textarea
              placeholder="A short bio of yourself"
              class="form-control bottom"
              name="bio"
              value={bio}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className="my-2">
            <button
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              type="button"
              className="w-100 btn btn-lg btn-outline-secondary"
            >
              Add Social Network Links
            </button>
          </div>

          {displaySocialInputs && (
            <Fragment>
              <div className="form-floating social-input">
                <i className="fab fa-twitter fa-2x" />
                <input
                  type="text"
                  placeholder="Twitter URL"
                  name="twitter"
                  class="form-control top"
                  value={twitter}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className="form-floating social-input">
                <i className="fab fa-facebook fa-2x" />
                <input
                  type="text"
                  placeholder="Facebook URL"
                  name="facebook"
                  class="form-control middle"
                  value={facebook}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className="form-floating social-input">
                <i className="fab fa-youtube fa-2x" />
                <input
                  type="text"
                  placeholder="YouTube URL"
                  name="youtube"
                  class="form-control middle"
                  value={youtube}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className="form-floating social-input">
                <i className="fab fa-linkedin fa-2x" />
                <input
                  type="text"
                  placeholder="Linkedin URL"
                  name="linkedin"
                  class="form-control middle"
                  value={linkedin}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className="form-floating social-input">
                <i className="fab fa-instagram fa-2x" />
                <input
                  type="text"
                  placeholder="Instagram URL"
                  name="instagram"
                  class="form-control bottom"
                  value={instagram}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </Fragment>
          )}

          <input type="submit" className="w-100 btn btn-lg btn-primary form-control top" />
          <Link className="w-100 btn btn-lg btn-outline-dark form-control bottom" to="/dashboard">
            Go Back
          </Link>
        </form>
      </div>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
