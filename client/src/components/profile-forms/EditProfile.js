import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
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

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? "" : profile.company,
      website: loading || !profile.website ? "" : profile.website,
      location: loading || !profile.location ? "" : profile.location,
      status: loading || !profile.status ? "" : profile.status,
      skills: loading || !profile.skills ? "" : profile.skills.join(","),
      githubusername:
        loading || !profile.githubusername ? "" : profile.githubusername,
      bio: loading || !profile.bio ? "" : profile.bio,
      twitter: loading || !profile.social ? "" : profile.social.twitter,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
      linkedin: loading || !profile.social ? "" : profile.social.linkedin,
      youtube: loading || !profile.social ? "" : profile.social.youtube,
      instagram: loading || !profile.social ? "" : profile.social.instagram,
    });
    //eslint-disable-next-line
  }, [loading, getCurrentProfile]);

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
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <div className="formBody form-create w-100 m-auto">
        <p className="lead">
          <i className="fas fa-user" /> Edit Profile
        </p>
        <small>*required fields</small>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-floating form-control top">
            <select name="status" value={status} onChange={(e) => onChange(e)}>
              <option value="0">* Select Professional Status</option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student">Student</option>
              <option value="Instructor">Instructor or Teacher</option>
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
                  class="form-control bottom"
                  name="instagram"
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

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
