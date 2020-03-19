import React from "react";
import { Link } from "react-router-dom";

const ProfileUI = ({ name, surname, profile_pic: profilePic }) => (
  <div>
    <div className="profile-view__background">
      <div className="upper-container">
        <img src={profilePic} className="profile-view__image" />
        <h2 className="profile-view__title">
          {name} {surname}
          <li className="profile-view__link-list">
            <Link className="profile-view__link" to={`/`}>
              go home
          </Link>
            <Link className="profile-view__link" to={`/${name}/edit`}>
              Edit profile
          </Link>
          </li>

        </h2>
      </div>
    </div>
  </div>
);

ProfileUI.defaultProps = {
  name: "john",
  surname: "doe",
  profile_pic: "https://images.wisegeek.com/beethoven.jpg"
};

export default ProfileUI;
