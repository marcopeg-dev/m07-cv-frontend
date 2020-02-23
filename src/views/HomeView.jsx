import React from "react";
import { Link } from "react-router-dom";
import { UsersList } from "../state/use-users-list";
import "../components/HomeViewUsers/users.css";

const HomeView = ({ uname }) => {
  const { users } = UsersList(uname);

  return (
    <div>
      <ul>
        {users.length > 0 ? (
          users.map(user => (
            <div key={user.id} className="home-view-users">
              <Link to={`/${user.id}`}>
                <li>
                  <img
                    src={user.profile_pic}
                    alt={`${user.name}'s profile pic`}
                  />
                  <h2>
                    {user.name} <br />
                    {user.surname}
                  </h2>
                  <div className="button" />
                </li>
              </Link>
            </div>
          ))
        ) : (
          <div>
            <h2 className="site-heading">There are no users to display</h2>
          </div>
        )}
      </ul>
    </div>
  );
};

export default HomeView;
