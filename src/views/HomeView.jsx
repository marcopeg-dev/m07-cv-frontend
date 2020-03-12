import React, { useState, useEffect, useRef } from "react";
import { UsersList } from "../state/use-users-list";
import SearchBox from "../components/SearchBox/SearchBox";
import UsersListLayout from "../layouts/HomeViewLayout/UsersListLayout";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorMessage from "../components/ErrorMessage";


const HomeView = ({ uname }) => {

  const { users, error2, loadingList } = UsersList(uname);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const focusSearch = useRef(null)
  // useEffect - FOCUS ON SEARCH INPUT
  useEffect(() => { focusSearch.current.focus() }, [])

  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const filteredUsers = users.filter(user => {
      return (
        user.name.toString().toLowerCase().includes(searchInput) ||
        user.surname.toString().toLowerCase().includes(searchInput)
      );
    });
    setSearchResults(filteredUsers);
  }, [users, searchInput]);

  const renderUsersList = () => {
    if (loadingList) return <LoadingIndicator />;
    if (error2) return <ErrorMessage message={error2.message} />;
    return <UsersListLayout props={searchResults} />;
  };

  return (
    <div>
      <SearchBox searchChanges={handleChange} focusSearch={focusSearch} />
      {renderUsersList()}

    </div>
  );
};

export default HomeView;
