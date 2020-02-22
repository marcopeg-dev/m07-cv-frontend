import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeView = ({ match, uname }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://m07.herokuapp.com/`)
      .then(response => response.json())
      .then(users => setUsers(users))
      .catch(err => console.error(err));
  }, []);

  console.log("hey", users);

  return (
    <div>
      <ul>
        {users.length > 0 ? (
          users.map(user => (
            <div key={user.id}>
            <Link to={`/${user.id}`}>
            <li>
            <h2 className="homeview-user-names">{user.data.name} {user.data.surname}</h2>
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
)};

export default HomeView;
