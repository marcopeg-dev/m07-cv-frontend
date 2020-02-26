import React from "react";
import { Link } from "react-router-dom";

const ProfileViewLayout = ({ uname, error, children }) => {
  const editOption = () => {
    if (!error) {
      return (
        <li>
          <Link className="link_profile-view" to={`/${uname}/edit`}>
            Edit profile
          </Link>
        </li>
      );
    }
  };

  return (
    <div>
      <h3>profile {uname}</h3>
      <ul>
        {editOption()}
        <li>
          <Link className="link_profile-view" to={`/`}>
            go home
          </Link>
        </li>
      </ul>
      <hr />
      <div>{children}</div>
    </div>
  );
};

export default ProfileViewLayout;
