import React from "react";

const SearchBox = ({ searchInput, searchChanges, focusSearch }) => {

  return (

    <form className="search">
      <input
        value={searchInput}
        onChange={searchChanges}
        ref={focusSearch}
        type="search"
        name="search"
        placeholder="Search user..."
      />
    </form>
  );
}

export default SearchBox;

