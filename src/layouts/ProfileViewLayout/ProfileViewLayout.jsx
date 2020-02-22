import React from "react";
import { Link } from "react-router-dom";
import { useBackend } from "../../state/use-backend";

const ProfileViewLayout = ({ uname, children }) => {
  // const uname = match.params;
  const { data, error, isLoading } = useBackend(uname);
  console.log("this", data);

  const editOption = () => {
    if (!error) {
      return (
        <li>
          <Link to={`/${uname}/edit`}>Edit profile</Link>
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
          <Link to={`/`}>go home</Link>
        </li>
      </ul>
      <hr />
      <div>{children}</div>
    </div>
  );
};

export default ProfileViewLayout;
