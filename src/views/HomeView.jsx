import React, { useState, useEffect } from "react";
import { UsersList } from "../state/use-users-list";
import SearchBox from "../components/SearchBox/SearchBox";
import UserListView from "../layouts/HomeViewLayout/UserListView";
import UsersListLayout from "../layouts/HomeViewLayout/UsersListLayout";

const HomeView = ({ uname }) => {
  const { users } = UsersList(uname);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([users]); //don't know how to display all the users as initial state, this is not working

  const handleChange = e => {
    setSearchInput(e.target.value);
  };
  //I’ve trying to figure it out if it’s possible to managing the state outside the home view.jsx. But couldn't make it

  useEffect(() => {
    const filteredUsers = users.filter(user =>
      user.id.toString().toLowerCase().includes(searchInput)
    );
    setSearchResults(filteredUsers);
  }, [searchInput]);

  return (
    <div>
      <SearchBox searchChanges={handleChange} />
      <UsersListLayout props={searchResults} />
    </div>
  );
};

export default HomeView;
