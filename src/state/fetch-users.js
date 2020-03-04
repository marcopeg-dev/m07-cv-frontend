import { useEffect, useState } from "react";

export const FetchUsers = uname => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://m07.herokuapp.com/`)
      .then(response => response.json())
      .then(users => setUsers(users))
      .catch(err => console.error(err));
  }, []);

  return {
    users
  };
};
