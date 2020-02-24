import React from "react";
import { Link } from "react-router-dom";
import { UsersList } from "../state/use-users-list";
import LoadingIndicator from "../components/LoadingIndicator";

const HomeView = ({ uname }) => {
  const { users } = UsersList(uname);

  return (
    <div>
      <ul>
        {users.length > 0 ? (
          users.map(user => (
            <div key={user.id}>
              <Link to={`/${user.id}`}>
                <li>
                  <h2 className="homeview-user-names">
                    {user.name} {user.surname}
                  </h2>
                </li>
              </Link>
            </div>
          ))
        ) : (
            <div>
              <h2 className="site-heading">{<LoadingIndicator />}</h2>
            </div>
          )}
      </ul>
    </div>
  );
};

export default HomeView;
