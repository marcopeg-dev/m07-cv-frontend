import React from "react";

const ProfileUI = ({ name, surname, profile_pic }) => (
  <div className="div_profile-view">
    <div className="div__profile-view-background">
      <div className="div__background-image"></div>
      <img src={profile_pic} className="img__profile-view" />
      <h2 className="h2__profile-view">
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
