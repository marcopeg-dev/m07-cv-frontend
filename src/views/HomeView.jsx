import React from "react";
import { Link } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorMessage from "../components/ErrorMessage";
import { useBackend } from "../state/use-backend";

const HomeView = ({ match }) => {
  const { users, error, isLoading } = useBackend();

  if (isLoading) return <LoadingIndicator />;
  if (error) return <ErrorMessage message={error.message} />;

  const dataUsersLi = users.map(user => (
    <li key={`user-${user.id}`}>
      <Link to={`/${user.id}`}>{user.name}</Link>
    </li>
  ));

  return <ul>{dataUsersLi}</ul>;
};

export default HomeView;
