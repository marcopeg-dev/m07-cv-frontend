import React from "react";
import { UsersList } from "../state/use-users-list";
import Users from "../components/HomeUsersView";
import LoadingIndicator from "../components/LoadingIndicator";

const HomeView = ({ uname }) => {
  const { users } = UsersList(uname);
  const filteredUsers = users.filter(user => user.id !== "undefined");

  return (
    <div>
      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <div key={user.id}>
              <Link className="home-view__link" to={`/${user.id}`}>
                <li>
                  <h2 className="home-view__user-names">
                    {user.name} {user.surname}
                  </h2>
                </li>
              </Link>
            </div>
          ))
        ) : (
          <div>
            <h2 className="h2_site-heading">There are no users to display</h2>
          </div>
        )}
      </ul>
    </div>
  );
};

export default HomeView;
