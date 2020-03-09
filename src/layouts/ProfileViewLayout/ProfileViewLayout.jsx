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
      <h2 className="profile-view__heading">profile- {uname}</h2>
      <div>{children}</div>
      <hr />
      <ul>
        {editOption()}
        <li>
          <Link className="profile-view__link" to={`/`}>
            go home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileViewLayout;
