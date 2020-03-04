import React from "react";
import { Link } from "react-router-dom";

const ProfileViewLayout = ({ uname, error, children }) => {
  const editOption = () => {
    if (!error) {
      return (
        <li>
          <Link className="profile-view__link" to={`/${uname}/edit`}>
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
          <Link className="profile-view__link" to={`/`}>
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
