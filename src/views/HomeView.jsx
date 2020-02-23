import React from "react";
import { Link } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorMessage from "../components/ErrorMessage";
import { useBackend } from "../state/use-backend";

const HomeView = ({ match }) => {
  console.log("home");

  const { users, error, isLoading } = useBackend();
  console.log(users);
  const dataUsersLi = users.map(user => (
    <li>
      <Link to={`/${user.id}`}>{user.data.name}</Link>
    </li>
  ));
  const createBody = () => {
    if (isLoading) return <LoadingIndicator />;
    if (error) return <ErrorMessage message={error.message} />;
    return (
      <div>
        <ul>{dataUsersLi}</ul>
      </div>
    );
  };
  return <>{createBody()}</>;
};

export default HomeView;
