import React, { useState } from "react";
import { UsersList } from "../../state/use-users-list";
import ReactDOM from "react-dom";

function Searchbar(uname) {
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
    <div className="App">
      <input
        onChange={handleChange}
        type="text"
        placeholder="search for a name"
        value={query}
      />

      {name.map(name => (
        <li>{name.name}</li>
      ))}
    </div>
  );
}

export default Searchbar;
