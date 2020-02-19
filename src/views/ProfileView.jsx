import React from "react";

const ProfileView = ({ match }) => {
  return <div>profile {match.params.uname}</div>;
};

export default ProfileView;
