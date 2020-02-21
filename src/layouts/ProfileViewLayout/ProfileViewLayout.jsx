import React from "react";
import { Link } from "react-router-dom";

const ProfileViewLayout = ({ uname, children }) => (
  <div>
    <h3>profile {uname}</h3>
    <ul>
      <li>
        <Link to={`/${uname}/edit`}>Edit profile</Link>
      </li>
      <li>
        <Link to={`/`}>go home</Link>
      </li>
    </ul>
    <hr />
    <div>{children}</div>
  </div>
);

export default ProfileViewLayout;
