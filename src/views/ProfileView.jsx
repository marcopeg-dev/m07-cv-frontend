import React from "react";
import { Link } from "react-router-dom";
import { useBackend } from "../state/use-backend";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorMessage from "../components/ErrorMessage";
import ProfileUI from "../components/ProfileUI";

const ProfileView = ({ match }) => {
  const { uname } = match.params;
  const { data, error, isLoading } = useBackend(uname);

  const createBody = () => {
    if (isLoading) return <LoadingIndicator />;
    if (error) return <ErrorMessage message={error.message} />;
    return <ProfileUI {...data} />;
  };

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
      <div>{createBody()}</div>
    </div>
  );
};

export default ProfileView;
