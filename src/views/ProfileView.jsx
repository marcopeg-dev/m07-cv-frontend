import React from "react";
import { Link } from "react-router-dom";

const ProfileView = ({ match }) => {
  return (
    <div>
      <h3>profile {match.params.uname}</h3>
      <ul>
        <li>
          <Link to={`/${match.params.uname}/edit`}>Edit profile</Link>
        </li>
        <li>
          <Link to={`/`}>go home</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileView;
