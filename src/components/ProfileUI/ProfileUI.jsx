import React from "react";
import "./index.css"

const ProfileUI = ({ name, surname, profile_pic: profilePic }) => (
  <div>
    <div className="profile-view__background">
      <img src={profilePic} className="profile-view__image" alt={`${name.charAt(0)}${surname.charAt(0)}`} />
      <h2 className="profile-view__title">
        {name} {surname}
      </h2>
    </div>
  </div>
);

ProfileUI.defaultProps = {
  name: "john",
  surname: "doe",
  profile_pic: "https://images.wisegeek.com/beethoven.jpg"
};

export default ProfileUI;
