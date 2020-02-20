import React from "react";

const ProfileUI = ({ name, surname }) => (
  <div>
    name: {name}
    <br />
    surname: {surname}
  </div>
);

ProfileUI.defaultProps = {
  name: "john",
  surname: "doe"
};

export default ProfileUI;
