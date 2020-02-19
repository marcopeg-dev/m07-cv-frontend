import React from "react";
import { Link } from "react-router-dom";
import { useBackend } from "../state/use-backend";

const ProfileView = ({ match }) => {
  const { data, error, isLoading } = useBackend(match.params.uname);

  const body = (() => {
    if (isLoading) return <div>loading...</div>;

    if (error) return <div>{error.message}</div>;

    return (
      <div>
        name: {data.name}
        <br />
        surname: {data.surname}
      </div>
    );
  })();

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
      <hr />
      <div>{body}</div>
    </div>
  );
};

export default ProfileView;
