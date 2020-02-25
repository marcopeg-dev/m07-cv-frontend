import React from "react";

const SearchBox = ({ searchInput, searchChanges }) => {

  return (

    <form className="search">
      <input
        value={searchInput}
        onChange={searchChanges}
        type="search"
        name="search"
        placeholder="Search user..."
      />
    </form>
  );
}

export default SearchBox;

