import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UsersList } from "../state/use-users-list";
import Searchbar from "../components/Searchbar";

const HomeView = ({ uname }) => {
  const { users } = UsersList(uname);
  const [name, setNames] = useState(users);
  const [query, setQuery] = useState("");

  const handleChange = e => {
    const results = users.filter(person => {
      return person.id.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setNames(results);
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="search for a name"
        value={query}
      />
      <ul>
        {users.length > 0 ? (
          name.map(user => (
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
            <h2 className="site-heading">There are no users to display</h2>
          </div>
        )}
      </ul>
    </div>
  );
};

export default HomeView;
